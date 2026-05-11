import { CalendarX, EyeOff, FileX2, PowerOff, Timer } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const problems = [
  {
    icon: CalendarX,
    title: "Periodic inspections miss intermittent faults",
    body: "Quarterly or annual thermography only captures a snapshot. Load-driven and intermittent thermal anomalies are easily missed between checks.",
  },
  {
    icon: EyeOff,
    title: "Blind spots between scheduled checks",
    body: "Most assets go unmonitored for weeks or months at a time, leaving operations exposed to drift and degradation.",
  },
  {
    icon: PowerOff,
    title: "Unplanned downtime is costly",
    body: "Failures in critical panels and switchgear can halt production, disrupt tenants, or impact uptime SLAs.",
  },
  {
    icon: Timer,
    title: "Slow escalation when issues appear",
    body: "Reports often reach the right people too late, after a fault has already affected operations.",
  },
  {
    icon: FileX2,
    title: "Limited maintenance evidence",
    body: "Without continuous data, it's hard to demonstrate condition over time or justify capital decisions.",
  },
];

export function ProblemSection() {
  return (
    <section className="mt-28 sm:mt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The problem"
          title="Periodic inspection isn't enough for critical electrical assets."
          description="Thermal faults are one of the earliest indicators of electrical asset distress — but they don't wait for the next scheduled check."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div key={p.title} className="panel reveal p-6">
              <p.icon className="h-5 w-5 text-[var(--risk-elevated)]" />
              <div className="mt-3 text-base font-semibold">{p.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
