import {
  Activity,
  AlertTriangle,
  ChevronRight,
  ThermometerSun,
  TimerReset,
} from "lucide-react";
import { RiskBadge } from "./RiskBadge";
import { Sparkline, TrendChart } from "./TrendChart";

const panels = [
  { id: "PNL-12", site: "DC-East · Row 4", phase: "B", temp: 71.4, risk: "critical" as const, trend: [50, 55, 58, 60, 64, 68, 71] },
  { id: "PNL-08", site: "DC-East · Row 2", phase: "A", temp: 62.1, risk: "elevated" as const, trend: [48, 50, 52, 55, 58, 60, 62] },
  { id: "PNL-21", site: "Plant B · MCC-3", phase: "C", temp: 51.7, risk: "watch" as const, trend: [44, 45, 47, 48, 49, 51, 52] },
  { id: "PNL-04", site: "HQ · Floor 2", phase: "A", temp: 38.2, risk: "normal" as const, trend: [36, 37, 37, 38, 38, 38, 38] },
];

const colorFor = (r: typeof panels[number]["risk"]) =>
  r === "critical"
    ? "var(--risk-critical)"
    : r === "elevated"
      ? "var(--risk-elevated)"
      : r === "watch"
        ? "var(--risk-watch)"
        : "var(--risk-normal)";

export function DashboardMock() {
  return (
    <div className="panel-strong relative overflow-hidden p-4 sm:p-5">
      {/* Window chrome */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--risk-critical)]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--risk-elevated)]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--risk-normal)]/70" />
          <span className="ml-3 hidden text-mono text-xs text-muted-foreground sm:inline">
            thermoguard.ai / control / overview
          </span>
        </div>
        <div className="flex items-center gap-2 text-mono text-[11px] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--risk-normal)] pulse-dot text-[var(--risk-normal)]" />
          Live · sync 4s
        </div>
      </div>

      {/* Top stats: 4 tiles */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <Stat
          icon={<Activity className="h-4 w-4 text-[var(--risk-watch)]" />}
          label="Site health"
          value="92"
          unit="/100"
        />
        <Stat
          icon={<ThermometerSun className="h-4 w-4 text-[var(--risk-elevated)]" />}
          label="Panels"
          value="148"
        />
        <Stat
          icon={<AlertTriangle className="h-4 w-4 text-[var(--risk-critical)]" />}
          label="Alerts"
          value="3"
          accent="critical"
        />
        <Stat
          icon={<TimerReset className="h-4 w-4 text-[var(--risk-normal)]" />}
          label="Avg. response"
          value="14"
          unit="m"
        />
      </div>

      {/* Trend */}
      <div className="panel-inset mt-3 p-3 sm:p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
              PNL-12 · Phase B · last 24h
            </div>
            <div className="truncate text-sm font-medium">
              Temperature trend — anomaly window 12:20–12:42
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            {["A", "B", "C"].map((p) => (
              <span
                key={p}
                className={`text-mono rounded px-1.5 py-0.5 text-[10px] ${
                  p === "B"
                    ? "bg-[var(--risk-critical)]/15 text-[var(--risk-critical)] ring-1 ring-[var(--risk-critical)]/30"
                    : "text-muted-foreground"
                }`}
              >
                Φ{p}
              </span>
            ))}
            <RiskBadge level="critical" className="ml-2" />
          </div>
        </div>
        <TrendChart
          height={130}
          stroke="var(--risk-critical)"
          fill="var(--risk-critical)"
        />
      </div>

      {/* Panels list */}
      <div className="panel mt-3 divide-y divide-[var(--hairline)]">
        {panels.map((p) => {
          const isCritical = p.risk === "critical";
          return (
            <div
              key={p.id}
              className={`flex items-center gap-3 px-3 py-2.5 sm:px-4 ${
                isCritical ? "bg-[var(--risk-critical)]/5" : ""
              }`}
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-mono text-sm font-medium">{p.id}</span>
                  <span className="text-mono text-[10px] text-muted-foreground">
                    Φ{p.phase}
                  </span>
                </div>
                <div className="truncate text-xs text-muted-foreground">
                  {p.site}
                </div>
              </div>
              <Sparkline points={p.trend} color={colorFor(p.risk)} />
              <div className="hidden text-mono text-sm tabular-nums sm:block">
                {p.temp.toFixed(1)}°
              </div>
              <RiskBadge level={p.risk} />
              <ChevronRight className="hidden h-4 w-4 text-muted-foreground/60 sm:block" />
            </div>
          );
        })}
      </div>

      {/* Floating alert toast */}
      <div className="pointer-events-none absolute right-4 top-14 hidden w-[260px] sm:block">
        <div
          className="panel-strong p-3"
          style={{ boxShadow: "var(--shadow-glow-primary)" }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium uppercase text-[var(--risk-critical)]">
              Critical alert
            </span>
            <span className="text-mono text-[10px] text-muted-foreground">
              12:42
            </span>
          </div>
          <div className="mt-1 text-sm font-medium">PNL-12 · Phase B</div>
          <div className="mt-0.5 text-xs text-muted-foreground">
            Sustained +18°C above baseline · 22 min
          </div>
          <div className="mt-2 flex items-center justify-between">
            <RiskBadge level="critical" />
            <span className="text-mono text-[10px] text-muted-foreground">
              Assigned · ops-east
            </span>
          </div>
        </div>
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
      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        {icon}
        <span className="truncate uppercase tracking-wide">{label}</span>
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
