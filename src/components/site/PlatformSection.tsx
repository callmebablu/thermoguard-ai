import { BellRing, FileBarChart, LineChart, Network } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    icon: Network,
    title: "Multi-site asset context",
    body: "Organise monitored panels, switchgear, and critical assets by site, owner, and operating priority.",
  },
  {
    icon: BellRing,
    title: "Configurable escalation",
    body: "Route risk-state changes to the right maintenance or operations contact based on agreed workflows.",
  },
  {
    icon: LineChart,
    title: "Trend visibility",
    body: "Review temperature movement across assets and phases without losing the operational context.",
  },
  {
    icon: FileBarChart,
    title: "Reporting evidence",
    body: "Keep alert history, response notes, and monitoring records available for review and planning.",
  },
];

export function PlatformSection() {
  return (
    <section id="platform" className="mt-28 sm:mt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform"
          title="The operating layer around the product journey."
          description="After thermal risk is detected and classified, the platform keeps the surrounding operational context clear: sites, owners, trends, escalations, and evidence."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="panel reveal group relative overflow-hidden p-6 transition-transform hover:-translate-y-0.5"
            >
              <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/25">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-4 text-base font-semibold">{c.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
