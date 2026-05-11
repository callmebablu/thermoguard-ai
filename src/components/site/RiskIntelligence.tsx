import { RiskBadge } from "@/components/mocks/RiskBadge";
import { Sparkline } from "@/components/mocks/TrendChart";
import { ThermalMap } from "@/components/mocks/ThermalMap";
import { SectionHeading } from "./SectionHeading";

const states = [
  {
    level: "normal" as const,
    title: "Normal",
    body: "Asset is operating within its learned thermal baseline.",
  },
  {
    level: "watch" as const,
    title: "Watch",
    body: "Mild deviation observed. Continued monitoring recommended.",
  },
  {
    level: "elevated" as const,
    title: "Elevated",
    body: "Sustained or growing anomaly. Inspection should be scheduled.",
  },
  {
    level: "critical" as const,
    title: "Critical",
    body: "High-confidence thermal risk. Escalation routed to on-call team.",
  },
];

const assets = [
  { id: "PNL-12", site: "DC-East · Row 4", risk: "critical" as const, trend: [50, 55, 58, 60, 64, 68, 71], temp: 71.4 },
  { id: "PNL-08", site: "DC-East · Row 2", risk: "elevated" as const, trend: [48, 50, 52, 55, 58, 60, 62], temp: 62.1 },
  { id: "PNL-21", site: "Plant B · MCC-3", risk: "watch" as const, trend: [44, 45, 47, 48, 49, 51, 52], temp: 51.7 },
  { id: "PNL-04", site: "HQ · Floor 2", risk: "normal" as const, trend: [36, 37, 37, 38, 38, 38, 38], temp: 38.2 },
  { id: "PNL-17", site: "Plant A · Bay 1", risk: "watch" as const, trend: [42, 43, 44, 45, 46, 47, 48], temp: 48.6 },
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
    <section id="risk" className="mt-28 sm:mt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Risk intelligence"
          title="Risk classification you can act on."
          description="Every monitored asset is continuously classified into a clear risk state — translating raw thermal data into decisions."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-5">
            {states.map((s) => (
              <div
                key={s.level}
                className="panel reveal flex items-start gap-4 p-5"
              >
                <RiskBadge level={s.level} label={s.title} />
                <p className="text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 lg:col-span-7">
            <div className="reveal">
              <ThermalMap />
            </div>
            <div className="panel reveal divide-y divide-[var(--hairline)]">
              <div className="px-4 py-3 text-xs uppercase text-muted-foreground">
                Asset list
              </div>
              {assets.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center justify-between gap-3 px-4 py-3"
                >
                  <div className="min-w-0">
                    <div className="text-mono text-sm font-medium">{a.id}</div>
                    <div className="truncate text-xs text-muted-foreground">
                      {a.site}
                    </div>
                  </div>
                  <Sparkline points={a.trend} color={colorFor(a.risk)} />
                  <div className="hidden text-mono text-sm sm:block">
                    {a.temp.toFixed(1)}°C
                  </div>
                  <RiskBadge level={a.risk} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
