import { Eye, Gauge, TimerReset, Wrench } from "lucide-react";

const items = [
  {
    icon: TimerReset,
    title: "Earlier detection",
    body: "Spot abnormal thermal patterns before they escalate.",
  },
  {
    icon: Gauge,
    title: "Faster response",
    body: "Risk-scored alerts route to the right teams immediately.",
  },
  {
    icon: Eye,
    title: "Better visibility",
    body: "Continuous panel insight across every site you operate.",
  },
  {
    icon: Wrench,
    title: "Smarter planning",
    body: "Prioritise maintenance with evidence, not guesswork.",
  },
];

export function ValueBar() {
  return (
    <section className="mt-20 sm:mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="panel reveal grid grid-cols-1 divide-y divide-[var(--hairline)] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="p-6">
              <it.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 text-sm font-semibold">{it.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {it.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
