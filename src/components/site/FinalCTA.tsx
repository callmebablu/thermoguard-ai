import {
  ArrowRight,
  CalendarCheck2,
  Mail,
  MessageSquareText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section id="contact" className="mt-28 sm:mt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="panel-strong reveal relative overflow-hidden p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.82_0.13_205/0.18),transparent_60%)]"
          />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-medium uppercase text-primary">
                Request a demo
              </div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Bring continuous thermal-risk intelligence to your critical
                power assets.
              </h2>
              <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
                Talk to our team about deploying ThermoGuard AI as the
                preventive maintenance intelligence layer for your sites.
                We'll walk you through the platform, integration options, and
                a deployment scoped to your environment.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CalendarCheck2 className="h-4 w-4 text-primary" />
                  30-minute platform walkthrough
                </li>
                <li className="flex items-center gap-2">
                  <CalendarCheck2 className="h-4 w-4 text-primary" />
                  Architecture and integration discussion (BMS, SCADA, CMMS)
                </li>
                <li className="flex items-center gap-2">
                  <CalendarCheck2 className="h-4 w-4 text-primary" />
                  Deployment options for single-site and multi-site portfolios
                </li>
              </ul>
            </div>

            <div className="panel p-6">
              <div className="text-sm font-semibold">Get in touch</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Choose the option that works best for your team.
              </p>

              <div className="mt-5 space-y-3">
                <Button asChild size="lg" className="w-full justify-between">
                  <a href="mailto:demo@thermoguard.ai?subject=ThermoGuard%20AI%20demo%20request">
                    <span className="flex items-center gap-2">
                      <CalendarCheck2 className="h-4 w-4" />
                      Request a demo
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full justify-between"
                >
                  <a href="mailto:engineering@thermoguard.ai?subject=ThermoGuard%20AI%20technical%20discussion">
                    <span className="flex items-center gap-2">
                      <MessageSquareText className="h-4 w-4" />
                      Talk to engineering
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-5 border-t border-[var(--hairline)] pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a
                    className="text-foreground hover:underline"
                    href="mailto:demo@thermoguard.ai"
                  >
                    demo@thermoguard.ai
                  </a>
                </div>
                <div className="mt-2 text-xs">
                  Typical response within 1 business day.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
