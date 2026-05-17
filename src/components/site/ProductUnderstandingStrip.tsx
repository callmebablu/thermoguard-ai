import { ArrowRight, Brain, Radio, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Radio,
    title: "Sense",
    body: "Wireless sensors track thermal behaviour across critical equipment.",
  },
  {
    icon: Brain,
    title: "Learn",
    body: "ThermoGuard AI learns load and temperature patterns over time.",
  },
  {
    icon: ShieldCheck,
    title: "Act",
    body: "Teams receive predictive insights, cooling guidance, alerts, and evidence.",
  },
];

export function ProductUnderstandingStrip() {
  return (
    <section aria-label="Product overview" className="mt-16 sm:mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid gap-4 md:grid-cols-3 md:gap-5">
          <div
            aria-hidden
            className="quick-strip-line reveal absolute left-[16.666%] right-[16.666%] top-[2.15rem] hidden h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent md:block"
          />
          {items.map((item, index) => (
            <div
              key={item.title}
              className="quick-strip-card panel reveal relative z-10 p-5"
              style={{ transitionDelay: `${index * 180}ms` }}
            >
              {index < items.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-4 top-8 z-20 hidden h-7 w-7 place-items-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_24px_oklch(0.82_0.13_205/0.18)] md:grid"
                  style={{ transitionDelay: `${index * 180 + 140}ms` }}
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              )}
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-primary/25 bg-primary/10 shadow-[0_0_28px_oklch(0.82_0.13_205/0.12)]">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-mono text-[10px] uppercase text-primary">0{index + 1}</div>
                  <h2 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
