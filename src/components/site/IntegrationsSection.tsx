import { BellRing, Building2, Fan, FileBarChart, Settings2, Workflow } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pathways = [
  {
    icon: BellRing,
    title: "Alerts and notifications",
    body: "Route risk events through email, SMS, app notifications, or team communication channels depending on deployment setup.",
  },
  {
    icon: Building2,
    title: "BMS / SCADA pathway",
    body: "Support integration pathways with building or industrial monitoring systems where site infrastructure allows.",
  },
  {
    icon: Workflow,
    title: "CMMS / maintenance workflows",
    body: "Help maintenance teams connect alerts and recommended actions with existing work-order or maintenance processes.",
  },
  {
    icon: Fan,
    title: "Cooling and fan control",
    body: "Optionally connect with client cooling systems to support automated or semi-automated fan response based on thermal behaviour.",
  },
  {
    icon: FileBarChart,
    title: "Reports and exports",
    body: "Provide event logs, evidence history, and maintenance records for review, reporting, and operational traceability.",
  },
  {
    icon: Settings2,
    title: "Custom deployment logic",
    body: "Adapt escalation rules, asset groups, thresholds, and reporting needs to match site-specific operating requirements.",
  },
];

const topPathways = pathways.slice(0, 3);
const bottomPathways = pathways.slice(3);

export function IntegrationsSection() {
  return (
    <section id="integrations" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title="Designed to fit into existing operational systems"
          description="ThermoGuard AI can work as a standalone monitoring layer or integrate with client systems for alerts, maintenance workflows, cooling response, and reporting."
          align="center"
        />

        <div className="relative mt-14 lg:mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/35 to-transparent lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-12 hidden h-[calc(100%-6rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-24 hidden rounded-full border border-primary/10 lg:block"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {topPathways.map((pathway, index) => (
              <article
                key={pathway.title}
                className="panel reveal group relative z-10 min-h-44 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_18px_52px_oklch(0.82_0.13_205_/_12%)]"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/25 transition group-hover:bg-primary/15 group-hover:ring-primary/40">
                    <pathway.icon aria-hidden="true" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{pathway.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pathway.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="pointer-events-none relative z-20 mx-auto my-7 hidden w-full max-w-sm lg:block">
            <div className="panel-strong reveal px-6 py-5 text-center shadow-[0_0_0_1px_oklch(0.82_0.13_205_/_28%),0_24px_70px_oklch(0.82_0.13_205_/_18%)]">
              <div className="text-mono text-[11px] font-medium uppercase text-primary">
                Centre layer
              </div>
              <h3 className="mt-2 text-xl font-semibold">ThermoGuard AI</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Standalone predictive monitoring with client-configurable integration pathways.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {bottomPathways.map((pathway, index) => (
              <article
                key={pathway.title}
                className="panel reveal group relative z-10 min-h-44 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_18px_52px_oklch(0.82_0.13_205_/_12%)]"
                style={{ transitionDelay: `${(index + topPathways.length) * 70}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/25 transition group-hover:bg-primary/15 group-hover:ring-primary/40">
                    <pathway.icon aria-hidden="true" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{pathway.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pathway.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="panel-strong reveal mx-auto mt-5 max-w-sm px-6 py-5 text-center lg:hidden">
            <div className="text-mono text-[11px] font-medium uppercase text-primary">
              Centre layer
            </div>
            <h3 className="mt-2 text-xl font-semibold">ThermoGuard AI</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Standalone predictive monitoring with client-configurable integration pathways.
            </p>
          </div>

          <div className="relative z-10 mx-auto mt-8 max-w-3xl">
            <p className="reveal text-center text-xs leading-relaxed text-muted-foreground">
              Integration scope depends on site infrastructure, client systems, and deployment
              requirements.
            </p>
          </div>
        </div>

        <div className="reveal mx-auto mt-8 max-w-4xl rounded-lg border border-[var(--hairline)] bg-elevated/45 px-5 py-4">
          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center">
            <p>Operate independently for predictive thermal monitoring and evidence capture.</p>
            <span aria-hidden="true" className="hidden h-8 w-px bg-[var(--hairline)] sm:block" />
            <p>
              Add optional integration pathways for alerts, maintenance, cooling response, and
              reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
