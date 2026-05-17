#!/usr/bin/env swift
import AppKit
import AVFoundation
import CoreMedia
import CoreVideo
import Foundation

enum EncodeError: Error, CustomStringConvertible {
    case usage
    case noFrames(String)
    case cannotCreateWriter(String)
    case cannotAddInput
    case cannotReadImage(String)
    case cannotCreatePixelBuffer
    case appendFailed(Int)
    case writerFailed(String)

    var description: String {
        switch self {
        case .usage:
            return "Usage: encode_frames.swift <frames-dir> <output.mp4> <width> <height> <fps> [bitrate]"
        case .noFrames(let path):
            return "No .jpg frames found in \(path)"
        case .cannotCreateWriter(let path):
            return "Could not create AVAssetWriter for \(path)"
        case .cannotAddInput:
            return "Could not add video input to writer"
        case .cannotReadImage(let path):
            return "Could not read frame \(path)"
        case .cannotCreatePixelBuffer:
            return "Could not create a CVPixelBuffer"
        case .appendFailed(let index):
            return "Failed to append frame \(index)"
        case .writerFailed(let message):
            return "Writer failed: \(message)"
        }
    }
}

func makePixelBuffer(from cgImage: CGImage, width: Int, height: Int, pool: CVPixelBufferPool?) throws -> CVPixelBuffer {
    var pixelBuffer: CVPixelBuffer?
    let status: CVReturn
    if let pool {
        status = CVPixelBufferPoolCreatePixelBuffer(kCFAllocatorDefault, pool, &pixelBuffer)
    } else {
        let attrs: [CFString: Any] = [
            kCVPixelBufferCGImageCompatibilityKey: true,
            kCVPixelBufferCGBitmapContextCompatibilityKey: true,
        ]
        status = CVPixelBufferCreate(
            kCFAllocatorDefault,
            width,
            height,
            kCVPixelFormatType_32BGRA,
            attrs as CFDictionary,
            &pixelBuffer
        )
    }
    guard status == kCVReturnSuccess, let buffer = pixelBuffer else {
        throw EncodeError.cannotCreatePixelBuffer
    }

    CVPixelBufferLockBaseAddress(buffer, [])
    defer { CVPixelBufferUnlockBaseAddress(buffer, []) }

    guard let context = CGContext(
        data: CVPixelBufferGetBaseAddress(buffer),
        width: width,
        height: height,
        bitsPerComponent: 8,
        bytesPerRow: CVPixelBufferGetBytesPerRow(buffer),
        space: CGColorSpaceCreateDeviceRGB(),
        bitmapInfo: CGImageAlphaInfo.premultipliedFirst.rawValue | CGBitmapInfo.byteOrder32Little.rawValue
    ) else {
        throw EncodeError.cannotCreatePixelBuffer
    }

    context.interpolationQuality = .high
    context.draw(cgImage, in: CGRect(x: 0, y: 0, width: width, height: height))
    return buffer
}

func run() throws {
    let args = CommandLine.arguments
    guard args.count >= 6 else { throw EncodeError.usage }

    let framesDir = URL(fileURLWithPath: args[1])
    let outputURL = URL(fileURLWithPath: args[2])
    guard let width = Int(args[3]), let height = Int(args[4]), let fps = Int32(args[5]) else {
        throw EncodeError.usage
    }
    let bitrate = args.count >= 7 ? (Int(args[6]) ?? 8_500_000) : 8_500_000

    let frameURLs = try FileManager.default.contentsOfDirectory(
        at: framesDir,
        includingPropertiesForKeys: nil
    )
    .filter { $0.pathExtension.lowercased() == "jpg" }
    .sorted { $0.lastPathComponent < $1.lastPathComponent }

    guard !frameURLs.isEmpty else { throw EncodeError.noFrames(framesDir.path) }

    try? FileManager.default.removeItem(at: outputURL)
    let writer: AVAssetWriter
    do {
        writer = try AVAssetWriter(outputURL: outputURL, fileType: .mp4)
    } catch {
        throw EncodeError.cannotCreateWriter(outputURL.path)
    }

    let settings: [String: Any] = [
        AVVideoCodecKey: AVVideoCodecType.h264,
        AVVideoWidthKey: width,
        AVVideoHeightKey: height,
        AVVideoCompressionPropertiesKey: [
            AVVideoAverageBitRateKey: bitrate,
            AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
        ],
    ]

    let input = AVAssetWriterInput(mediaType: .video, outputSettings: settings)
    input.expectsMediaDataInRealTime = false
    guard writer.canAdd(input) else { throw EncodeError.cannotAddInput }
    writer.add(input)

    let adaptor = AVAssetWriterInputPixelBufferAdaptor(
        assetWriterInput: input,
        sourcePixelBufferAttributes: [
            kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA,
            kCVPixelBufferWidthKey as String: width,
            kCVPixelBufferHeightKey as String: height,
            kCVPixelBufferCGImageCompatibilityKey as String: true,
            kCVPixelBufferCGBitmapContextCompatibilityKey as String: true,
        ]
    )

    guard writer.startWriting() else {
        throw EncodeError.writerFailed(writer.error?.localizedDescription ?? "startWriting returned false")
    }
    writer.startSession(atSourceTime: .zero)

    for (index, frameURL) in frameURLs.enumerated() {
        while !input.isReadyForMoreMediaData {
            Thread.sleep(forTimeInterval: 0.01)
        }

        guard let image = NSImage(contentsOf: frameURL) else {
            throw EncodeError.cannotReadImage(frameURL.path)
        }
        var rect = CGRect(origin: .zero, size: image.size)
        guard let cgImage = image.cgImage(forProposedRect: &rect, context: nil, hints: nil) else {
            throw EncodeError.cannotReadImage(frameURL.path)
        }

        let buffer = try makePixelBuffer(from: cgImage, width: width, height: height, pool: adaptor.pixelBufferPool)
        let time = CMTime(value: CMTimeValue(index), timescale: fps)
        guard adaptor.append(buffer, withPresentationTime: time) else {
            let message = writer.error?.localizedDescription ?? "writer status \(writer.status.rawValue)"
            throw EncodeError.writerFailed("append failed at frame \(index): \(message)")
        }
    }

    input.markAsFinished()
    let semaphore = DispatchSemaphore(value: 0)
    writer.finishWriting {
        semaphore.signal()
    }
    semaphore.wait()

    if writer.status != .completed {
        throw EncodeError.writerFailed(writer.error?.localizedDescription ?? "unknown AVAssetWriter error")
    }

    print("Encoded \(frameURLs.count) frames to \(outputURL.path)")
}

do {
    try run()
} catch {
    fputs("\(error)\n", stderr)
    exit(1)
}
