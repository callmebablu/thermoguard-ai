import {
  BellRing,
  Building2,
  Database,
  FileBarChart,
  Network,
  Workflow,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pathways = [
  {
    icon: BellRing,
    title: "Alert routing",
    body: "Designed to support email, SMS, and team notification pathways for configurable escalation workflows.",
  },
  {
    icon: Workflow,
    title: "CMMS readiness",
    body: "Maintenance events, recommended actions, and resolution history can be scoped for work-order and ticketing workflows.",
  },
  {
    icon: Building2,
    title: "BMS / SCADA pathway",
    body: "Deployment planning can include building management, energy monitoring, and industrial control visibility requirements.",
  },
  {
    icon: Database,
    title: "API-ready workflows",
    body: "Structured thermal events and risk classifications are designed to support future data access and operational reporting.",
  },
  {
    icon: FileBarChart,
    title: "Reporting exports",
    body: "Alert history, asset risk state, and maintenance evidence can support review packs for operations and compliance teams.",
  },
  {
    icon: Network,
    title: "Multi-site visibility",
    body: "Portfolio views can align monitored panels, site risk state, and escalation ownership across distributed environments.",
  },
];

const steps = [
  "Map operational systems",
  "Define alert ownership",
  "Scope data pathways",
  "Validate reporting needs",
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title="Built to fit maintenance and operations workflows."
          description="ThermoGuard AI is designed as a monitoring layer that can be scoped around the systems teams already use for alerts, maintenance evidence, and site visibility."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="grid gap-4 md:grid-cols-2 lg:col-span-8">
            {pathways.map((pathway) => (
              <div key={pathway.title} className="panel reveal p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/25">
                    <pathway.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-base font-semibold">
                      {pathway.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pathway.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 lg:col-span-4">
            <div className="panel-strong reveal p-5">
              <div className="text-mono text-[11px] font-medium uppercase text-primary">
                Deployment scoping
              </div>
              <h3 className="mt-3 text-xl font-semibold">
                Integration pathways are defined around your operating model.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Each rollout can be planned around site systems, escalation
                ownership, reporting requirements, and the maintenance workflows
                already in place.
              </p>

              <ol className="mt-5 space-y-3">
                {steps.map((step, index) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-[var(--hairline)] bg-elevated text-mono text-[11px] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <p className="reveal text-xs leading-relaxed text-muted-foreground">
              Integration details depend on site architecture, available data
              paths, and operational requirements. ThermoGuard AI should be
              scoped as decision support for maintenance visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
