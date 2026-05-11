import { Activity, AlertTriangle, ThermometerSun } from "lucide-react";
import { RiskBadge } from "./RiskBadge";
import { Sparkline, TrendChart } from "./TrendChart";

const panels = [
  { id: "PNL-12", site: "DC-East · Row 4", temp: 71.4, risk: "critical" as const, trend: [50, 55, 58, 60, 64, 68, 71] },
  { id: "PNL-08", site: "DC-East · Row 2", temp: 62.1, risk: "elevated" as const, trend: [48, 50, 52, 55, 58, 60, 62] },
  { id: "PNL-21", site: "Plant B · MCC-3", temp: 51.7, risk: "watch" as const, trend: [44, 45, 47, 48, 49, 51, 52] },
  { id: "PNL-04", site: "HQ · Floor 2", temp: 38.2, risk: "normal" as const, trend: [36, 37, 37, 38, 38, 38, 38] },
];

export function DashboardMock() {
  return (
    <div className="panel-strong relative overflow-hidden p-4 sm:p-5">
      {/* Window chrome */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--risk-critical)]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--risk-elevated)]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--risk-normal)]/70" />
          <span className="ml-3 text-xs text-muted-foreground text-mono">
            thermoguard.ai / control
          </span>
        </div>
        <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--risk-normal)] pulse-dot text-[var(--risk-normal)]" />
          Live · 3 sites
        </div>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-3 gap-3">
        <Stat
          icon={<Activity className="h-4 w-4 text-[var(--risk-watch)]" />}
          label="Site health"
          value="92"
          unit="/100"
        />
        <Stat
          icon={<ThermometerSun className="h-4 w-4 text-[var(--risk-elevated)]" />}
          label="Panels monitored"
          value="148"
        />
        <Stat
          icon={<AlertTriangle className="h-4 w-4 text-[var(--risk-critical)]" />}
          label="Active alerts"
          value="3"
          accent="critical"
        />
      </div>

      {/* Trend */}
      <div className="mt-4 panel p-4">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase text-muted-foreground">
              PNL-12 · Phase B
            </div>
            <div className="text-sm font-medium">
              Temperature trend · last 24h
            </div>
          </div>
          <RiskBadge level="critical" />
        </div>
        <TrendChart
          height={120}
          stroke="var(--risk-critical)"
          fill="var(--risk-critical)"
        />
      </div>

      {/* Panels list */}
      <div className="mt-4 panel divide-y divide-[var(--hairline)]">
        {panels.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between gap-3 px-4 py-3"
          >
            <div className="min-w-0">
              <div className="text-mono text-sm font-medium">{p.id}</div>
              <div className="truncate text-xs text-muted-foreground">
                {p.site}
              </div>
            </div>
            <Sparkline
              points={p.trend}
              color={
                p.risk === "critical"
                  ? "var(--risk-critical)"
                  : p.risk === "elevated"
                    ? "var(--risk-elevated)"
                    : p.risk === "watch"
                      ? "var(--risk-watch)"
                      : "var(--risk-normal)"
              }
            />
            <div className="hidden text-mono text-sm sm:block">
              {p.temp.toFixed(1)}°C
            </div>
            <RiskBadge level={p.risk} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
  unit,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit?: string;
  accent?: "critical";
}) {
  return (
    <div className="panel p-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        {icon}
        <span className="truncate">{label}</span>
      </div>
      <div
        className={`mt-1 text-mono text-2xl font-semibold ${
          accent === "critical" ? "text-[var(--risk-critical)]" : ""
        }`}
      >
        {value}
        {unit && (
          <span className="ml-0.5 text-sm font-normal text-muted-foreground">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}
