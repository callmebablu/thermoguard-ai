import {
  Activity,
  Brain,
  ClipboardCheck,
  Gauge,
  Radio,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const stages = [
  {
    icon: Radio,
    label: "Telemetry",
    body: "Continuous temperature samples streamed from monitored panels and switchgear.",
  },
  {
    icon: Activity,
    label: "Baseline learning",
    body: "Per-asset thermal profiles learned over time, normalised by load and ambient.",
  },
  {
    icon: Brain,
    label: "Anomaly scoring",
    body: "Deviations weighted by magnitude, persistence, drift, and load context.",
  },
  {
    icon: Gauge,
    label: "Risk classification",
    body: "Asset state resolved to Normal, Watch, Elevated, or Critical.",
  },
  {
    icon: ClipboardCheck,
    label: "Recommended action",
    body: "Decision-support guidance routed to the assigned maintenance team.",
  },
];

const factors = [
  { name: "Magnitude", weight: 32 },
  { name: "Persistence", weight: 28 },
  { name: "Drift vs baseline", weight: 24 },
  { name: "Load context", weight: 16 },
];

export function RiskEngine() {
  return (
    <section id="risk-engine" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Risk engine"
          title="How heat data becomes maintenance intelligence."
          description="A transparent pipeline from raw thermal telemetry to a single, defensible risk classification — built for teams that need to justify every action."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ol className="panel reveal divide-y divide-[var(--hairline)]">
              {stages.map((s, i) => (
                <li key={s.label} className="flex items-start gap-4 p-5">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/25">
                    <s.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-mono text-[11px] uppercase text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-semibold">
                        {s.label}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <div className="panel reveal p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Risk score breakdown</div>
                <span className="text-mono text-[11px] uppercase text-muted-foreground">
                  PNL-12 · Φ B
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                How the current score for a critical asset is composed.
              </p>
              <div className="mt-4 space-y-3">
                {factors.map((f) => (
                  <div key={f.name}>
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-muted-foreground">{f.name}</span>
                      <span className="text-mono">{f.weight}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-elevated">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${f.weight}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-[var(--hairline)] pt-3">
                <span className="text-xs text-muted-foreground">
                  Composite score
                </span>
                <span className="text-mono text-lg font-semibold text-[var(--risk-critical)]">
                  87 / 100
                </span>
              </div>
            </div>

            <p className="reveal text-xs text-muted-foreground">
              Models are advisory. Final action remains with qualified
              maintenance personnel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
