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
        />

        <div className="reveal mt-12 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--hairline)]">
          {/* Header row — desktop */}
          <div className="hidden grid-cols-12 bg-elevated/60 px-5 py-3 text-[11px] uppercase tracking-wide text-muted-foreground md:grid">
            <div className="col-span-4">Capability</div>
            <div className="col-span-4 flex items-center gap-2">
              <Minus className="h-3.5 w-3.5" />
              Periodic thermography
            </div>
            <div className="col-span-4 flex items-center gap-2 text-primary">
              <Check className="h-3.5 w-3.5" />
              ThermoGuard AI
            </div>
          </div>

          <div className="divide-y divide-[var(--hairline)]">
            {rows.map((r) => (
              <div
                key={r.label}
                className="grid grid-cols-1 gap-3 px-5 py-4 md:grid-cols-12 md:gap-4"
              >
                <div className="col-span-4 text-sm font-medium">{r.label}</div>
                <div className="col-span-4 flex items-start gap-2 text-sm text-muted-foreground">
                  <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/70 md:hidden" />
                  <div>
                    <div className="text-[11px] uppercase text-muted-foreground/70 md:hidden">
                      Periodic
                    </div>
                    {r.periodic}
                  </div>
                </div>
                <div className="col-span-4 flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary md:hidden" />
                  <div>
                    <div className="text-[11px] uppercase text-primary md:hidden">
                      ThermoGuard AI
                    </div>
                    <span className="text-foreground">{r.continuous}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
