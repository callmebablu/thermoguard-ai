import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const proof = [
  "Always-on monitoring",
  "Risk-scored alerts",
  "Audit-ready history",
  "Multi-site ready",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div aria-hidden className="grid-bg absolute inset-x-0 top-0 -z-10 h-[760px] opacity-35" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(ellipse_at_76%_28%,oklch(0.78_0.12_205/0.18),transparent_52%),radial-gradient(ellipse_at_8%_18%,oklch(0.32_0.05_250/0.24),transparent_48%)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-surface/80 px-3 py-1 text-mono text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--risk-watch)] pulse-dot text-[var(--risk-watch)]" />
                Live telemetry · 3 sites · sync 12s ago
              </span>
              <h1
                className="mt-5 max-w-2xl font-semibold leading-[1.07]"
                style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.45rem)" }}
              >
                Thermal-risk intelligence for critical electrical assets.
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                ThermoGuard AI learns thermal and load behaviour, predicts heat build-up, and helps
                teams act before risk escalates.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#contact">
                    Book a demo
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#how-it-works">See how it works</a>
                </Button>
              </div>

              <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2 text-[13px] text-muted-foreground sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {proof.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="reveal relative lg:-mr-10 lg:scale-[1.06]">
              <div
                aria-hidden
                className="absolute -inset-10 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.13_205/0.24),transparent_66%)] blur-2xl"
              />
              <div className="relative overflow-hidden rounded-md bg-transparent">
                <video
                  className="aspect-video w-full object-cover brightness-[1.14] contrast-[1.07] saturate-[1.05]"
                  src="/media/hero/thermoguard-hero.mp4"
                  poster="/thermoguard-hero-poster.jpg"
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="ThermoGuard AI gateway and thermal sensor cinematic product reveal"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,oklch(0.155_0.018_245/0.28),transparent_20%),linear-gradient(180deg,oklch(0.155_0.018_245/0.04),transparent_26%,oklch(0.155_0.018_245/0.14))] ring-1 ring-inset ring-white/5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
