import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  ThermometerSun,
  TimerReset,
} from "lucide-react";
import { RiskBadge } from "@/components/mocks/RiskBadge";
import { Sparkline, TrendChart } from "@/components/mocks/TrendChart";
import { SectionHeading } from "./SectionHeading";

const alerts = [
  {
    time: "12:42",
    asset: "PNL-12 · Phase B",
    level: "critical" as const,
    text: "Sustained +18°C above baseline · 22 min",
  },
  {
    time: "11:08",
    asset: "PNL-08 · Phase A",
    level: "elevated" as const,
    text: "Drift trend exceeded threshold",
  },
  {
    time: "09:31",
    asset: "PNL-21 · Phase C",
    level: "watch" as const,
    text: "Mild deviation from learned profile",
  },
  {
    time: "Yesterday",
    asset: "PNL-04",
    level: "normal" as const,
    text: "Returned to baseline after inspection",
  },
];

const actions = [
  "Inspect PNL-12 phase B termination — high priority",
  "Review load profile on DC-East Row 4 distribution",
  "Schedule torque check on PNL-08 within 48h",
  "Re-baseline PNL-04 after maintenance closure",
];

const assets = [
  { id: "PNL-12", site: "DC-East · Row 4", risk: "critical" as const, trend: [50, 55, 58, 60, 64, 68, 71], temp: 71.4 },
  { id: "PNL-08", site: "DC-East · Row 2", risk: "elevated" as const, trend: [48, 50, 52, 55, 58, 60, 62], temp: 62.1 },
  { id: "PNL-21", site: "Plant B · MCC-3", risk: "watch" as const, trend: [44, 45, 47, 48, 49, 51, 52], temp: 51.7 },
  { id: "PNL-17", site: "Plant A · Bay 1", risk: "watch" as const, trend: [42, 43, 44, 45, 46, 47, 48], temp: 48.6 },
  { id: "PNL-04", site: "HQ · Floor 2", risk: "normal" as const, trend: [36, 37, 37, 38, 38, 38, 38], temp: 38.2 },
];

const colorFor = (r: typeof assets[number]["risk"]) =>
  r === "critical"
    ? "var(--risk-critical)"
    : r === "elevated"
      ? "var(--risk-elevated)"
      : r === "watch"
        ? "var(--risk-watch)"
        : "var(--risk-normal)";

export function DashboardPreview() {
  return (
    <section className="mt-28 sm:mt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Inside the platform"
          title="One operational view of thermal risk across your sites."
          description="Stat tiles, trends, alerts, and recommended actions — designed for clarity in an operations control room."
        />

        <div className="reveal panel-strong mt-12 p-4 sm:p-6">
          {/* Top stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat
              icon={<Activity className="h-4 w-4 text-[var(--risk-watch)]" />}
              label="Site health score"
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
            <Stat
              icon={<TimerReset className="h-4 w-4 text-[var(--risk-normal)]" />}
              label="Avg. response"
              value="14"
              unit="min"
            />
          </div>

          {/* Mid grid: trend + alerts */}
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <div className="panel p-4 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase text-muted-foreground">
                    PNL-12 · Phase B
                  </div>
                  <div className="text-sm font-medium">
                    Temperature trend · last 24 hours
                  </div>
                </div>
                <RiskBadge level="critical" />
              </div>
              <div className="mt-3">
                <TrendChart
                  height={200}
                  stroke="var(--risk-critical)"
                  fill="var(--risk-critical)"
                />
              </div>
            </div>

            <div className="panel p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-medium">Alert timeline</div>
                <span className="text-xs text-muted-foreground">Today</span>
              </div>
              <ul className="space-y-3">
                {alerts.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <RiskBadge level={a.level} label="" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-mono">{a.time}</span>
                        <span>·</span>
                        <span className="truncate">{a.asset}</span>
                      </div>
                      <div className="text-sm">{a.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom: recommended + asset table */}
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <div className="panel p-4">
              <div className="mb-3 flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-primary" />
                <div className="text-sm font-medium">Recommended actions</div>
              </div>
              <ul className="space-y-2.5">
                {actions.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel p-4 lg:col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-medium">Asset risk</div>
                <span className="text-xs text-muted-foreground">
                  Sorted by risk
                </span>
              </div>
              <div className="overflow-hidden rounded-md ring-1 ring-[var(--hairline)]">
                <div className="grid grid-cols-12 bg-elevated px-3 py-2 text-xs uppercase text-muted-foreground">
                  <div className="col-span-3">Asset</div>
                  <div className="col-span-4">Site</div>
                  <div className="col-span-2">Trend</div>
                  <div className="col-span-1 text-right">Temp</div>
                  <div className="col-span-2 text-right">Risk</div>
                </div>
                <div className="divide-y divide-[var(--hairline)]">
                  {assets.map((a) => (
                    <div
                      key={a.id}
                      className="grid grid-cols-12 items-center px-3 py-2.5 text-sm"
                    >
                      <div className="col-span-3 text-mono">{a.id}</div>
                      <div className="col-span-4 truncate text-muted-foreground">
                        {a.site}
                      </div>
                      <div className="col-span-2">
                        <Sparkline points={a.trend} color={colorFor(a.risk)} />
                      </div>
                      <div className="col-span-1 text-right text-mono">
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
      </div>
    </section>
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
    <div className="panel p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        {icon}
        <span className="truncate">{label}</span>
      </div>
      <div
        className={`mt-1 text-mono text-3xl font-semibold ${
          accent === "critical" ? "text-[var(--risk-critical)]" : ""
        }`}
      >
        {value}
        {unit && (
          <span className="ml-0.5 text-base font-normal text-muted-foreground">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}
