import { RiskBadge } from "@/components/mocks/RiskBadge";
import { Sparkline } from "@/components/mocks/TrendChart";
import { ThermalMap } from "@/components/mocks/ThermalMap";
import { SectionHeading } from "./SectionHeading";

const states = [
  {
    level: "normal" as const,
    title: "Normal",
    body: "Asset is operating within its learned thermal baseline.",
    trigger: "Within ±1σ of baseline · stable load",
  },
  {
    level: "watch" as const,
    title: "Watch",
    body: "Mild deviation observed. Continued monitoring recommended.",
    trigger: "≥1.5σ above baseline for 10 min",
  },
  {
    level: "elevated" as const,
    title: "Elevated",
    body: "Sustained or growing anomaly. Inspection should be scheduled.",
    trigger: "≥2.5σ for 30 min · or persistent upward drift",
  },
  {
    level: "critical" as const,
    title: "Critical",
    body: "High-confidence thermal risk. Escalation routed to on-call team.",
    trigger: "≥3σ sustained · or absolute threshold breach",
  },
];

const lifecycle = [
  "Normal",
  "Watch",
  "Elevated",
  "Critical",
];

const assets = [
  { id: "PNL-12", site: "DC-East · Row 4", phase: "B", risk: "critical" as const, trend: [50, 55, 58, 60, 64, 68, 71], temp: 71.4 },
  { id: "PNL-08", site: "DC-East · Row 2", phase: "A", risk: "elevated" as const, trend: [48, 50, 52, 55, 58, 60, 62], temp: 62.1 },
  { id: "PNL-21", site: "Plant B · MCC-3", phase: "C", risk: "watch" as const, trend: [44, 45, 47, 48, 49, 51, 52], temp: 51.7 },
  { id: "PNL-04", site: "HQ · Floor 2", phase: "A", risk: "normal" as const, trend: [36, 37, 37, 38, 38, 38, 38], temp: 38.2 },
  { id: "PNL-17", site: "Plant A · Bay 1", phase: "B", risk: "watch" as const, trend: [42, 43, 44, 45, 46, 47, 48], temp: 48.6 },
];

const colorFor = (r: typeof assets[number]["risk"]) =>
  r === "critical"
    ? "var(--risk-critical)"
    : r === "elevated"
      ? "var(--risk-elevated)"
      : r === "watch"
        ? "var(--risk-watch)"
        : "var(--risk-normal)";

export function RiskIntelligence() {
  return (
    <section id="risk" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Risk intelligence"
          title="Risk classification you can act on."
          description="Teams see every monitored asset as a clear risk state, supported by triggers, thermal context, and asset-level trends."
        />

        {/* Risk state strip */}
        <div className="reveal mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-[12px] text-muted-foreground">
          <span className="text-mono text-[11px] uppercase text-primary">
            Current risk states
          </span>
          {lifecycle.map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <span className="rounded-full border border-[var(--hairline)] bg-elevated/60 px-2.5 py-1">
                {s}
              </span>
              {i < lifecycle.length - 1 && (
                <span className="hidden h-px w-6 bg-[var(--hairline)] sm:inline-block" />
              )}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-5">
            {states.map((s) => (
              <div
                key={s.level}
                className="panel reveal flex items-start gap-4 p-5"
              >
                <RiskBadge level={s.level} label={s.title} />
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">{s.body}</p>
                  <div className="mt-2 text-mono text-[11px] uppercase text-muted-foreground/80">
                    Trigger · {s.trigger}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 lg:col-span-7">
            <div className="reveal">
              <ThermalMap />
            </div>
            <div className="panel reveal">
              <div className="grid grid-cols-12 gap-2 border-b border-[var(--hairline)] px-4 py-2 text-[10px] uppercase tracking-wide text-muted-foreground">
                <div className="col-span-4">Asset</div>
                <div className="col-span-1">Φ</div>
                <div className="col-span-3">Trend</div>
                <div className="col-span-2 text-right">Temp</div>
                <div className="col-span-2 text-right">Risk</div>
              </div>
              <div className="divide-y divide-[var(--hairline)]">
                {assets.map((a) => (
                  <div
                    key={a.id}
                    className="grid grid-cols-12 items-center gap-2 px-4 py-3"
                  >
                    <div className="col-span-4 min-w-0">
                      <div className="text-mono text-sm font-medium">
                        {a.id}
                      </div>
                      <div className="truncate text-xs text-muted-foreground">
                        {a.site}
                      </div>
                    </div>
                    <div className="col-span-1 text-mono text-xs text-muted-foreground">
                      {a.phase}
                    </div>
                    <div className="col-span-3">
                      <Sparkline points={a.trend} color={colorFor(a.risk)} />
                    </div>
                    <div className="col-span-2 text-right text-mono text-sm tabular-nums">
                      {a.temp.toFixed(1)}°
                    </div>
                    <div className="col-span-2 flex justify-end">
                      <RiskBadge level={a.risk} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
