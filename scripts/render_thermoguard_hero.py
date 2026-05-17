#!/usr/bin/env python3
"""Render ThermoGuard AI landing hero frames from a still product reference."""

from __future__ import annotations

import argparse
import math
import shutil
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont


WIDTH = 1920
HEIGHT = 1080
FPS = 24
DURATION = 5
FRAME_COUNT = FPS * DURATION
PRODUCT_OFFSET_X = 260


def clamp(value: float, low: float, high: float) -> float:
    return max(low, min(high, value))


def smoothstep(edge0: float, edge1: float, value: float) -> float:
    if edge0 == edge1:
        return 1.0 if value >= edge1 else 0.0
    x = clamp((value - edge0) / (edge1 - edge0), 0.0, 1.0)
    return x * x * (3.0 - 2.0 * x)


def ease_in_out_cubic(value: float) -> float:
    if value < 0.5:
        return 4.0 * value * value * value
    return 1.0 - pow(-2.0 * value + 2.0, 3.0) / 2.0


def ease_out_cubic(value: float) -> float:
    return 1.0 - pow(1.0 - value, 3.0)


def lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size=size)
        except OSError:
            continue
    return ImageFont.load_default()


def rounded_rectangle(draw: ImageDraw.ImageDraw, xy: tuple[float, float, float, float], radius: int, **kwargs) -> None:
    draw.rounded_rectangle(tuple(round(v) for v in xy), radius=radius, **kwargs)


def radial_glow(
    size: tuple[int, int],
    center: tuple[float, float],
    radius: float,
    color: tuple[int, int, int],
    strength: float,
) -> Image.Image:
    w, h = size
    yy, xx = np.mgrid[0:h, 0:w]
    dx = xx - center[0]
    dy = yy - center[1]
    falloff = np.clip(1.0 - np.sqrt(dx * dx + dy * dy) / radius, 0.0, 1.0)
    alpha = (falloff * falloff * strength * 255).astype(np.uint8)
    out = np.zeros((h, w, 4), dtype=np.uint8)
    out[:, :, 0] = color[0]
    out[:, :, 1] = color[1]
    out[:, :, 2] = color[2]
    out[:, :, 3] = alpha
    return Image.fromarray(out, "RGBA")


def build_vignette() -> Image.Image:
    yy, xx = np.mgrid[0:HEIGHT, 0:WIDTH]
    nx = (xx - WIDTH / 2) / (WIDTH / 2)
    ny = (yy - HEIGHT / 2) / (HEIGHT / 2)
    dist = np.sqrt(nx * nx + ny * ny)
    alpha = np.clip((dist - 0.42) / 0.72, 0.0, 1.0)
    alpha = (alpha * alpha * 150).astype(np.uint8)
    out = np.zeros((HEIGHT, WIDTH, 4), dtype=np.uint8)
    out[:, :, 3] = alpha
    return Image.fromarray(out, "RGBA")


def add_background_panel(base: Image.Image) -> None:
    panel = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    d = ImageDraw.Draw(panel)
    x, y, w, h = 1390, 145, 360, 330
    rounded_rectangle(d, (x, y, x + w, y + h), 18, outline=(96, 130, 155, 34), width=2)
    for ix in range(1, 4):
        px = x + ix * w / 4
        d.line((px, y + 34, px, y + h - 34), fill=(96, 130, 155, 22), width=2)
    for iy in range(1, 5):
        py = y + iy * h / 5
        d.line((x + 28, py, x + w - 28, py), fill=(96, 130, 155, 18), width=2)
    d.ellipse((1535, 254, 1598, 317), fill=(255, 118, 37, 52))
    d.ellipse((1554, 273, 1578, 297), fill=(255, 173, 70, 75))
    panel = panel.filter(ImageFilter.GaussianBlur(10))
    base.alpha_composite(panel)


def build_scene(reference_path: Path) -> Image.Image:
    raw = Image.open(reference_path).convert("RGB")
    resized = raw.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)

    dark = Image.new("RGB", (WIDTH, HEIGHT), (6, 9, 15))
    blurred = resized.filter(ImageFilter.GaussianBlur(48))
    blurred = ImageEnhance.Brightness(blurred).enhance(0.48)
    blurred = ImageEnhance.Color(blurred).enhance(0.8)
    base_rgb = Image.blend(dark, blurred, 0.52)
    base = base_rgb.convert("RGBA")

    base.alpha_composite(radial_glow((WIDTH, HEIGHT), (1260, 520), 880, (43, 111, 172), 0.19))
    base.alpha_composite(radial_glow((WIDTH, HEIGHT), (1535, 725), 420, (12, 168, 255), 0.10))
    add_background_panel(base)

    product_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    product_layer.paste(resized.convert("RGBA"), (PRODUCT_OFFSET_X, 0))

    mask = Image.new("L", (WIDTH, HEIGHT), 0)
    mask_draw = ImageDraw.Draw(mask)
    fade_width = 190
    for x in range(PRODUCT_OFFSET_X, WIDTH):
        alpha = int(clamp((x - PRODUCT_OFFSET_X) / fade_width, 0, 1) * 255)
        mask_draw.line((x, 0, x, HEIGHT), fill=alpha)
    product_layer.putalpha(mask)
    base.alpha_composite(product_layer)
    return base


def transform_point(point: tuple[float, float], crop: tuple[float, float, float, float]) -> tuple[float, float]:
    x0, y0, cw, ch = crop
    return ((point[0] - x0) * WIDTH / cw, (point[1] - y0) * HEIGHT / ch)


def transform_line(points: list[tuple[float, float]], crop: tuple[float, float, float, float]) -> list[tuple[float, float]]:
    return [transform_point(point, crop) for point in points]


def draw_glow_line(
    frame: Image.Image,
    points: list[tuple[float, float]],
    color: tuple[int, int, int],
    alpha: float,
    width: int,
    blur: int = 12,
) -> None:
    if alpha <= 0:
        return
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    g = ImageDraw.Draw(glow)
    fill = (*color, int(255 * alpha))
    g.line(points, fill=fill, width=width, joint="curve")
    halo = glow.filter(ImageFilter.GaussianBlur(blur))
    frame.alpha_composite(halo)
    crisp = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    c = ImageDraw.Draw(crisp)
    c.line(points, fill=(*color, int(210 * alpha)), width=max(2, width // 3), joint="curve")
    frame.alpha_composite(crisp)


def draw_glow_dot(
    frame: Image.Image,
    point: tuple[float, float],
    color: tuple[int, int, int],
    alpha: float,
    radius: float,
    blur: int = 13,
) -> None:
    if alpha <= 0:
        return
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    d = ImageDraw.Draw(glow)
    x, y = point
    d.ellipse((x - radius * 4, y - radius * 4, x + radius * 4, y + radius * 4), fill=(*color, int(72 * alpha)))
    d.ellipse((x - radius, y - radius, x + radius, y + radius), fill=(*color, int(235 * alpha)))
    frame.alpha_composite(glow.filter(ImageFilter.GaussianBlur(blur)))
    crisp = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    cd = ImageDraw.Draw(crisp)
    cd.ellipse((x - radius, y - radius, x + radius, y + radius), fill=(*color, int(235 * alpha)))
    frame.alpha_composite(crisp)


def bezier_points(
    p0: tuple[float, float],
    p1: tuple[float, float],
    p2: tuple[float, float],
    p3: tuple[float, float],
    steps: int = 48,
) -> list[tuple[float, float]]:
    points = []
    for idx in range(steps):
        t = idx / (steps - 1)
        mt = 1 - t
        x = mt**3 * p0[0] + 3 * mt * mt * t * p1[0] + 3 * mt * t * t * p2[0] + t**3 * p3[0]
        y = mt**3 * p0[1] + 3 * mt * mt * t * p1[1] + 3 * mt * t * t * p2[1] + t**3 * p3[1]
        points.append((x, y))
    return points


def draw_signal(frame: Image.Image, crop: tuple[float, float, float, float], progress: float, pulse: float) -> None:
    if progress <= 0:
        return
    raw_curve = bezier_points((1548, 844), (1465, 735), (1355, 708), (1240, 650))
    curve = transform_line(raw_curve, crop)
    count = max(2, int(len(curve) * progress))
    alpha = 0.17 + 0.08 * pulse
    draw_glow_line(frame, curve[:count], (33, 185, 255), alpha, 7, blur=18)

    # A tiny moving packet makes the wireless link read without looking sci-fi.
    dot_index = min(len(curve) - 1, int((len(curve) - 1) * clamp((progress + pulse * 0.18), 0, 1)))
    draw_glow_dot(frame, curve[dot_index], (64, 202, 255), 0.42 * progress, 3.2, blur=10)


def draw_risk_ui(frame: Image.Image, crop: tuple[float, float, float, float], opacity: float) -> None:
    if opacity <= 0:
        return
    x, y = transform_point((1320, 286), crop)
    w = 360 * WIDTH / crop[2]
    h = 126 * HEIGHT / crop[3]
    if x > WIDTH or y > HEIGHT or x + w < 0 or y + h < 0:
        return

    scale = clamp(w / 360, 0.65, 2.2)
    layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    rounded_rectangle(
        d,
        (x, y, x + w, y + h),
        int(18 * scale),
        fill=(7, 15, 24, int(116 * opacity)),
        outline=(104, 190, 230, int(54 * opacity)),
        width=max(1, int(1.4 * scale)),
    )
    d.text(
        (x + 20 * scale, y + 14 * scale),
        "THERMAL RISK",
        font=font(max(10, int(12 * scale)), bold=True),
        fill=(155, 211, 235, int(180 * opacity)),
    )
    labels = ["Normal", "Watch", "Elevated", "Critical"]
    pill_w = (w - 34 * scale) / 4
    py = y + 58 * scale
    for idx, label in enumerate(labels):
        px = x + 17 * scale + idx * pill_w
        selected = label == "Watch"
        fill = (19, 72, 102, int(128 * opacity)) if selected else (255, 255, 255, int(18 * opacity))
        outline = (255, 172, 70, int(100 * opacity)) if selected else (115, 160, 180, int(30 * opacity))
        rounded_rectangle(
            d,
            (px, py, px + pill_w - 6 * scale, py + 33 * scale),
            int(10 * scale),
            fill=fill,
            outline=outline,
            width=max(1, int(scale)),
        )
        text_fill = (255, 198, 103, int(226 * opacity)) if selected else (178, 207, 218, int(150 * opacity))
        d.text(
            (px + 9 * scale, py + 9 * scale),
            label,
            font=font(max(10, int(12 * scale)), bold=selected),
            fill=text_fill,
        )
    layer = layer.filter(ImageFilter.GaussianBlur(0.15))
    frame.alpha_composite(layer)


def draw_atmosphere(frame: Image.Image, t: float) -> None:
    haze = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    d = ImageDraw.Draw(haze)
    drift = math.sin(t * math.tau) * 18
    d.ellipse((1140 + drift, 438, 1880 + drift, 1000), fill=(22, 100, 150, 20))
    d.ellipse((680 - drift, 160, 1520 - drift, 860), fill=(41, 70, 110, 14))
    frame.alpha_composite(haze.filter(ImageFilter.GaussianBlur(48)))


def apply_vignette(frame: Image.Image, vignette: Image.Image) -> None:
    frame.alpha_composite(vignette)


def render_frames(reference_path: Path, out_dir: Path, poster_path: Path | None) -> None:
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    if poster_path:
        poster_path.parent.mkdir(parents=True, exist_ok=True)

    scene = build_scene(reference_path)
    vignette = build_vignette()

    scale_x = WIDTH / Image.open(reference_path).width
    scale_y = HEIGHT / Image.open(reference_path).height
    focus_x = PRODUCT_OFFSET_X + 788 * scale_x
    focus_y = 654 * scale_y

    gateway_led = [(PRODUCT_OFFSET_X + 688 * scale_x, 656 * scale_y), (PRODUCT_OFFSET_X + 890 * scale_x, 655 * scale_y)]
    sensor_led = [(PRODUCT_OFFSET_X + 1096 * scale_x, 824 * scale_y), (PRODUCT_OFFSET_X + 1185 * scale_x, 824 * scale_y)]
    sensor_dot = (PRODUCT_OFFSET_X + 1128 * scale_x, 743 * scale_y)
    indicators = [
        (PRODUCT_OFFSET_X + 820 * scale_x, 438 * scale_y, (88, 247, 205)),
        (PRODUCT_OFFSET_X + 820 * scale_x, 472 * scale_y, (88, 247, 205)),
        (PRODUCT_OFFSET_X + 820 * scale_x, 506 * scale_y, (88, 247, 205)),
        (PRODUCT_OFFSET_X + 820 * scale_x, 544 * scale_y, (34, 184, 255)),
    ]

    for frame_index in range(FRAME_COUNT):
        t = frame_index / (FRAME_COUNT - 1)
        move = ease_in_out_cubic(t)
        zoom = lerp(2.18, 1.0, ease_out_cubic(t))
        crop_w = WIDTH / zoom
        crop_h = HEIGHT / zoom
        center_x = lerp(focus_x + 30, WIDTH / 2, move)
        center_y = lerp(focus_y + 6, HEIGHT / 2, move)
        x0 = clamp(center_x - crop_w / 2, 0, WIDTH - crop_w)
        y0 = clamp(center_y - crop_h / 2, 0, HEIGHT - crop_h)
        crop = (x0, y0, crop_w, crop_h)

        frame = scene.crop((x0, y0, x0 + crop_w, y0 + crop_h)).resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS).convert("RGBA")
        startup = smoothstep(0.05, 0.34, t)
        frame = ImageEnhance.Brightness(frame).enhance(0.82 + 0.18 * startup)
        draw_atmosphere(frame, t)

        led_alpha = smoothstep(0.10, 0.36, t)
        indicator_alpha = smoothstep(0.25, 0.48, t)
        sensor_alpha = smoothstep(0.36, 0.60, t)
        signal_alpha = smoothstep(0.46, 0.86, t)
        ui_alpha = smoothstep(0.52, 0.86, t)
        pulse = 0.5 + 0.5 * math.sin((t * 2.1 + 0.12) * math.tau)

        draw_glow_line(frame, transform_line(gateway_led, crop), (45, 187, 255), 0.42 * led_alpha, 12, blur=18)
        for idx, (ix, iy, color) in enumerate(indicators):
            delay = idx * 0.07
            point_alpha = indicator_alpha * smoothstep(0.25 + delay, 0.47 + delay, t)
            draw_glow_dot(frame, transform_point((ix, iy), crop), color, 0.55 * point_alpha, 3.0, blur=9)
        draw_glow_dot(frame, transform_point(sensor_dot, crop), (42, 184, 255), 0.52 * sensor_alpha, 3.5, blur=10)
        draw_glow_line(frame, transform_line(sensor_led, crop), (42, 184, 255), 0.38 * sensor_alpha, 9, blur=15)
        draw_signal(frame, crop, signal_alpha, pulse)
        draw_risk_ui(frame, crop, ui_alpha)

        apply_vignette(frame, vignette)
        out_path = out_dir / f"frame_{frame_index:04d}.jpg"
        frame.convert("RGB").save(out_path, quality=93, subsampling=1, optimize=True)

        if poster_path and frame_index == FRAME_COUNT - 1:
            frame.convert("RGB").save(poster_path, quality=94, subsampling=1, optimize=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--reference", required=True, type=Path)
    parser.add_argument("--out-dir", default=Path("/private/tmp/thermoguard_hero_frames"), type=Path)
    parser.add_argument("--poster", default=None, type=Path)
    args = parser.parse_args()
    render_frames(args.reference, args.out_dir, args.poster)


if __name__ == "__main__":
    main()
