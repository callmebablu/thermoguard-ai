import {
  Activity,
  BellRing,
  Brain,
  ClipboardList,
  LineChart,
  ShieldAlert,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    icon: Activity,
    title: "Real-time thermal monitoring",
    body: "Continuous temperature insight across panels, switchgear, and critical assets — so condition is visible at all times, not only during inspections.",
  },
  {
    icon: Brain,
    title: "AI anomaly detection",
    body: "Models learn each asset's normal thermal profile and surface deviations, drift, and unusual load-driven behaviour earlier.",
  },
  {
    icon: ShieldAlert,
    title: "Risk scoring & prioritisation",
    body: "Each asset is classified across Normal, Watch, Elevated, and Critical states so attention goes to where it matters most.",
  },
  {
    icon: BellRing,
    title: "Alerts & escalation history",
    body: "Configurable alert thresholds, escalation paths, and a complete audit trail of every notification.",
  },
  {
    icon: LineChart,
    title: "Trend analysis",
    body: "Long-horizon trends and comparisons across phases, panels, and sites support evidence-based decisions.",
  },
  {
    icon: ClipboardList,
    title: "Recommended maintenance actions",
    body: "Decision-support guidance highlights which assets to inspect first and why, supporting preventive maintenance planning.",
  },
];

export function PlatformSection() {
  return (
    <section id="platform" className="mt-28 sm:mt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform"
          title="A decision-support layer for electrical thermal risk."
          description="Everything operations and maintenance teams need to move from reactive thermography to continuous thermal awareness."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="panel reveal group relative overflow-hidden p-6 transition-transform hover:-translate-y-0.5"
            >
              <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/25">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-4 text-base font-semibold">{c.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
