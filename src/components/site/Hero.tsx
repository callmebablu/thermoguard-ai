import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardMock } from "@/components/mocks/DashboardMock";

const proof = [
  "Always-on monitoring",
  "Risk-scored alerts",
  "Audit-ready history",
  "Multi-site ready",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40"
    >
      <div
        aria-hidden
        className="grid-bg absolute inset-x-0 top-0 -z-10 h-[680px] opacity-40"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-surface/80 px-3 py-1 text-mono text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--risk-watch)] pulse-dot text-[var(--risk-watch)]" />
                Live telemetry · 3 sites · sync 12s ago
              </span>
              <h1
                className="mt-5 font-semibold leading-[1.04]"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.75rem)" }}
              >
                Continuous thermal-risk intelligence for critical electrical
                infrastructure.
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                ThermoGuard AI continuously monitors panel and switchgear
                temperatures, applies{" "}
                <span className="text-foreground">
                  AI-assisted anomaly detection
                </span>
                , and routes risk-scored alerts to the right teams — so issues
                are addressed before they become downtime.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#contact">
                    Request demo
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#platform">Explore platform</a>
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
            <div className="reveal relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_top,oklch(0.82_0.13_205/0.16),transparent_60%)] blur-2xl"
              />
              <DashboardMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
