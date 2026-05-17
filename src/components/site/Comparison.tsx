import { Check, Minus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const rows = [
  {
    label: "Coverage",
    periodic: "Snapshot, quarterly or annual",
    continuous: "Continuous, 24/7 across all monitored assets",
  },
  {
    label: "Intermittent faults",
    periodic: "Often missed between checks",
    continuous: "Surfaced as drift or recurring deviation",
  },
  {
    label: "Escalation time",
    periodic: "Hours to days after report delivery",
    continuous: "Minutes via routed risk-scored alerts",
  },
  {
    label: "Maintenance evidence",
    periodic: "Standalone PDF reports",
    continuous: "Time-series record + lifecycle audit trail",
  },
  {
    label: "Planning input",
    periodic: "Manual interpretation",
    continuous: "Risk-scored prioritisation across portfolio",
  },
];

export function Comparison() {
  return (
    <section id="comparison" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Continuous vs periodic"
          title="A complement to inspection — not a replacement for expertise."
          description="ThermoGuard AI extends the visibility your maintenance teams already trust, between scheduled thermography passes."
          align="center"
        />

        <div className="reveal mx-auto mt-10 max-w-6xl overflow-hidden rounded-[var(--radius-lg)] border border-primary/15 bg-elevated/35 shadow-[0_24px_80px_oklch(0_0_0_/_22%)]">
          {/* Header row — desktop */}
          <div className="hidden grid-cols-12 border-b border-[var(--hairline)] bg-background/40 px-5 py-4 text-mono text-[10px] uppercase text-muted-foreground md:grid">
            <div className="col-span-4">Capability</div>
            <div className="col-span-4 flex items-center gap-2 border-l border-[var(--hairline)] pl-5">
              <Minus className="h-3.5 w-3.5" />
              Periodic thermography
            </div>
            <div className="col-span-4 flex items-center gap-2 rounded-md border border-primary/15 bg-primary/8 px-4 py-2 text-primary">
              <Check className="h-3.5 w-3.5" />
              ThermoGuard AI
            </div>
          </div>

          <div className="divide-y divide-[var(--hairline)]">
            {rows.map((r, index) => (
              <div
                key={r.label}
                className={`grid grid-cols-1 gap-3 px-5 py-5 transition-colors hover:bg-primary/[0.035] md:grid-cols-12 md:gap-4 ${
                  index % 2 === 0 ? "bg-background/10" : "bg-elevated/10"
                }`}
              >
                <div className="col-span-4 text-sm font-semibold text-foreground">{r.label}</div>
                <div className="col-span-4 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground md:border-l md:border-[var(--hairline)] md:pl-5">
                  <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/70 md:hidden" />
                  <div>
                    <div className="text-mono text-[10px] uppercase text-muted-foreground/70 md:hidden">
                      Periodic
                    </div>
                    {r.periodic}
                  </div>
                </div>
                <div className="col-span-4 flex items-start gap-2 rounded-md border border-primary/10 bg-primary/[0.045] px-3 py-3 text-sm leading-relaxed ring-1 ring-primary/[0.04] md:-my-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary md:hidden" />
                  <div>
                    <div className="text-mono text-[10px] uppercase text-primary md:hidden">
                      ThermoGuard AI
                    </div>
                    <span className="font-medium text-foreground">{r.continuous}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="reveal mx-auto mt-5 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          Qualified inspection remains essential. ThermoGuard AI adds continuous visibility between
          scheduled checks.
        </p>
      </div>
    </section>
  );
}
