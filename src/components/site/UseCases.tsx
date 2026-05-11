import {
  Building2,
  Factory,
  HardHat,
  Server,
  Wrench,
  Zap,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cases = [
  {
    icon: Building2,
    title: "Facility management",
    body: "Continuous panel visibility across portfolios, with consolidated reporting and audit history.",
  },
  {
    icon: Zap,
    title: "Electrical maintenance teams",
    body: "Catch thermal drift between scheduled inspections and prioritise the next intervention with confidence.",
  },
  {
    icon: Server,
    title: "Data centres",
    body: "Protect uptime SLAs by surfacing risk in distribution panels, busways, and switchgear earlier.",
  },
  {
    icon: HardHat,
    title: "Commercial buildings",
    body: "Reduce avoidable disruption to tenants and operations across multi-floor and multi-tenant sites.",
  },
  {
    icon: Factory,
    title: "Industrial plants",
    body: "Identify load-driven anomalies in MCCs and process power assets before they impact production.",
  },
  {
    icon: Wrench,
    title: "Maintenance service providers",
    body: "Offer continuous thermal monitoring as a managed service across multiple client sites.",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="mt-28 sm:mt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Use cases"
          title="Built for the teams responsible for uptime."
          description="ThermoGuard AI fits into existing maintenance and operations workflows across a wide range of environments."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="panel reveal p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-elevated ring-1 ring-[var(--hairline)]">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-base font-semibold">{c.title}</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
