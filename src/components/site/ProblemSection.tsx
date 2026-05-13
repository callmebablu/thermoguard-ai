import { CalendarX, EyeOff, PowerOff, Timer } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const problems = [
  {
    icon: CalendarX,
    title: "Periodic inspection misses intermittent faults",
    body: "Quarterly or annual thermography only captures a snapshot. Load-driven and intermittent anomalies are easily missed between checks.",
  },
  {
    icon: EyeOff,
    title: "Blind spots between scheduled checks",
    body: "Most assets go unmonitored for weeks at a time, leaving operations exposed to drift and slow degradation.",
  },
  {
    icon: PowerOff,
    title: "Unplanned downtime is costly",
    body: "Failures in critical panels and switchgear halt production, disrupt tenants, or impact uptime SLAs.",
  },
  {
    icon: Timer,
    title: "Escalations arrive too late",
    body: "Reports often reach the right people only after a fault has already affected operations.",
  },
];

export function ProblemSection() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The problem"
          title="Periodic inspection isn't enough for critical electrical assets."
          description="Thermal faults are one of the earliest indicators of electrical asset distress — and they don't wait for the next scheduled check."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
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
