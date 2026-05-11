import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardMock } from "@/components/mocks/DashboardMock";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-32 lg:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-surface px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--risk-watch)] pulse-dot text-[var(--risk-watch)]" />
                AI-assisted thermal-risk monitoring
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
                Continuous thermal-risk intelligence for critical electrical
                environments.
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                ThermoGuard AI continuously monitors panel and switchgear
                temperatures, flags abnormal thermal patterns with AI-assisted
                anomaly detection, and routes risk-scored alerts to the right
                teams — so issues are addressed before they become downtime.
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
              <p className="mt-5 text-xs text-muted-foreground">
                Decision-support platform · Built for facility, maintenance, and
                critical-power teams
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="reveal relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_top,oklch(0.82_0.13_205/0.18),transparent_60%)] blur-2xl"
              />
              <DashboardMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
