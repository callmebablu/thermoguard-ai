import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Download,
  ThermometerSun,
  TimerReset,
} from "lucide-react";
import { RiskBadge } from "@/components/mocks/RiskBadge";
import { Sparkline, TrendChart } from "@/components/mocks/TrendChart";
import { SectionHeading } from "./SectionHeading";

const alerts = [
  {
    time: "12:42",
    asset: "PNL-12 · Φ B",
    level: "critical" as const,
    status: "Assigned",
    text: "Sustained +18°C above baseline · 22 min",
  },
  {
    time: "11:08",
    asset: "PNL-08 · Φ A",
    level: "elevated" as const,
    status: "Detected",
    text: "Drift trend exceeded threshold",
  },
  {
    time: "09:31",
    asset: "PNL-21 · Φ C",
    level: "watch" as const,
    status: "Detected",
    text: "Mild deviation from learned profile",
  },
  {
    time: "Yesterday",
    asset: "PNL-04",
    level: "normal" as const,
    status: "Resolved",
    text: "Returned to baseline after inspection",
  },
];

const actions = [
  { text: "Inspect PNL-12 phase B termination", priority: "High", window: "Today" },
  { text: "Review load profile on DC-East Row 4 distribution", priority: "High", window: "48h" },
  { text: "Schedule torque check on PNL-08", priority: "Medium", window: "This week" },
  { text: "Re-baseline PNL-04 after maintenance closure", priority: "Medium", window: "7 days" },
];

const assets = [
  { id: "PNL-12", site: "DC-East · Row 4", phase: "B", risk: "critical" as const, trend: [50, 55, 58, 60, 64, 68, 71], temp: 71.4, seen: "4s ago" },
  { id: "PNL-08", site: "DC-East · Row 2", phase: "A", risk: "elevated" as const, trend: [48, 50, 52, 55, 58, 60, 62], temp: 62.1, seen: "6s ago" },
  { id: "PNL-21", site: "Plant B · MCC-3", phase: "C", risk: "watch" as const, trend: [44, 45, 47, 48, 49, 51, 52], temp: 51.7, seen: "8s ago" },
  { id: "PNL-17", site: "Plant A · Bay 1", phase: "B", risk: "watch" as const, trend: [42, 43, 44, 45, 46, 47, 48], temp: 48.6, seen: "5s ago" },
  { id: "PNL-04", site: "HQ · Floor 2", phase: "A", risk: "normal" as const, trend: [36, 37, 37, 38, 38, 38, 38], temp: 38.2, seen: "3s ago" },
];

const colorFor = (r: typeof assets[number]["risk"]) =>
  r === "critical"
    ? "var(--risk-critical)"
    : r === "elevated"
      ? "var(--risk-elevated)"
      : r === "watch"
        ? "var(--risk-watch)"
        : "var(--risk-normal)";

const statusTone = (s: string) =>
  s === "Resolved"
    ? "text-[var(--risk-normal)] ring-[var(--risk-normal)]/30 bg-[var(--risk-normal)]/10"
    : s === "Assigned"
      ? "text-[var(--risk-watch)] ring-[var(--risk-watch)]/30 bg-[var(--risk-watch)]/10"
      : "text-muted-foreground ring-[var(--hairline)] bg-elevated/60";

export function DashboardPreview() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Inside the platform"
          title="One operational view of thermal risk across your sites."
          description="Stat tiles, trends, alerts, and recommended actions — designed for clarity in an operations control room."
        />

        <div className="reveal panel-strong mt-12 p-3 sm:p-5">
          {/* Toolbar */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[var(--hairline)] pb-3">
            <div className="flex flex-wrap items-center gap-2">
              <button className="inline-flex items-center gap-1.5 rounded-md border border-[var(--hairline)] bg-elevated/60 px-2.5 py-1 text-xs">
                Site · DC-East
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-md border border-[var(--hairline)] bg-elevated/60 px-2.5 py-1 text-xs">
                Range · Last 24h
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
              </button>
              <span className="hidden text-mono text-[11px] text-muted-foreground sm:inline">
                · 148 assets · 3 active alerts
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-1.5 rounded-md border border-[var(--hairline)] bg-elevated/60 px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground">
                <Download className="h-3 w-3" />
                Export
              </button>
              <span className="hidden items-center gap-1.5 text-mono text-[11px] text-muted-foreground sm:inline-flex">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--risk-normal)] pulse-dot text-[var(--risk-normal)]" />
                Live
              </span>
            </div>
          </div>

          {/* Top stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat
              icon={<Activity className="h-4 w-4 text-[var(--risk-watch)]" />}
              label="Site health score"
              value="92"
              unit="/100"
              delta="▲ 2 vs yesterday"
            />
            <Stat
              icon={<ThermometerSun className="h-4 w-4 text-[var(--risk-elevated)]" />}
              label="Panels monitored"
              value="148"
              delta="▲ 4 this week"
            />
            <Stat
              icon={<AlertTriangle className="h-4 w-4 text-[var(--risk-critical)]" />}
              label="Active alerts"
              value="3"
              accent="critical"
              delta="▲ 1 vs yesterday"
            />
            <Stat
              icon={<TimerReset className="h-4 w-4 text-[var(--risk-normal)]" />}
              label="Avg. response"
              value="14"
              unit="min"
              delta="▼ 3 vs 7d avg"
            />
          </div>

          {/* Mid grid: trend + alerts */}
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <div className="panel-inset p-4 lg:col-span-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                    PNL-12 · Phase B
                  </div>
                  <div className="text-sm font-medium">
                    Temperature trend · last 24 hours
                  </div>
                </div>
                <div className="flex items-center gap-1">
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
              <div className="mt-3 relative">
                <TrendChart
                  height={200}
                  stroke="var(--risk-critical)"
                  fill="var(--risk-critical)"
                />
                <div className="pointer-events-none absolute right-2 top-1 text-mono text-[10px] uppercase text-[var(--risk-elevated)]/80">
                  · · · Baseline +10°C
                </div>
              </div>
            </div>

            <div className="panel p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-medium">Alert timeline</div>
                <span className="text-mono text-[11px] text-muted-foreground">
                  Today
                </span>
              </div>
              <ul className="space-y-3">
                {alerts.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <RiskBadge level={a.level} label="" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span className="text-mono">{a.time}</span>
                        <span>·</span>
                        <span className="truncate">{a.asset}</span>
                      </div>
                      <div className="text-sm">{a.text}</div>
                      <span
                        className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[10px] uppercase ring-1 ${statusTone(
                          a.status,
                        )}`}
                      >
                        {a.status}
                      </span>
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
              <ul className="space-y-3">
                {actions.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div className="min-w-0 flex-1">
                      <div className="text-foreground">{a.text}</div>
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span
                          className={`rounded px-1.5 py-0.5 text-mono ring-1 ${
                            a.priority === "High"
                              ? "text-[var(--risk-critical)] ring-[var(--risk-critical)]/30 bg-[var(--risk-critical)]/10"
                              : "text-[var(--risk-elevated)] ring-[var(--risk-elevated)]/30 bg-[var(--risk-elevated)]/10"
                          }`}
                        >
                          {a.priority}
                        </span>
                        <span>· {a.window}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel p-4 lg:col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-medium">Asset risk</div>
                <span className="text-mono text-[11px] text-muted-foreground">
                  Sorted by risk
                </span>
              </div>

              {/* Desktop table */}
              <div className="hidden overflow-hidden rounded-md ring-1 ring-[var(--hairline)] md:block">
                <div className="grid grid-cols-12 bg-elevated/60 px-3 py-2 text-[10px] uppercase tracking-wide text-muted-foreground">
                  <div className="col-span-3">Asset</div>
                  <div className="col-span-3">Site</div>
                  <div className="col-span-1">Φ</div>
                  <div className="col-span-2">Trend</div>
                  <div className="col-span-1 text-right">Temp</div>
                  <div className="col-span-2 text-right">Risk · Seen</div>
                </div>
                <div className="divide-y divide-[var(--hairline)]">
                  {assets.map((a) => (
                    <div
                      key={a.id}
                      className="grid grid-cols-12 items-center px-3 py-2.5 text-sm"
                    >
                      <div className="col-span-3 text-mono">{a.id}</div>
                      <div className="col-span-3 truncate text-muted-foreground">
                        {a.site}
                      </div>
                      <div className="col-span-1 text-mono text-xs text-muted-foreground">
                        {a.phase}
                      </div>
                      <div className="col-span-2">
                        <Sparkline points={a.trend} color={colorFor(a.risk)} />
                      </div>
                      <div className="col-span-1 text-right text-mono">
                        {a.temp.toFixed(1)}°
                      </div>
                      <div className="col-span-2 flex flex-col items-end">
                        <RiskBadge level={a.risk} />
                        <span className="mt-1 text-mono text-[10px] text-muted-foreground">
                          {a.seen}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile cards */}
              <ul className="space-y-2 md:hidden">
                {assets.map((a) => (
                  <li
                    key={a.id}
                    className="rounded-md border border-[var(--hairline)] bg-elevated/40 p-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-mono text-sm font-medium">
                            {a.id}
                          </span>
                          <span className="text-mono text-[10px] text-muted-foreground">
                            Φ{a.phase}
                          </span>
                        </div>
                        <div className="truncate text-xs text-muted-foreground">
                          {a.site}
                        </div>
                      </div>
                      <RiskBadge level={a.risk} />
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <Sparkline points={a.trend} color={colorFor(a.risk)} />
                      <div className="text-right">
                        <div className="text-mono text-sm">
                          {a.temp.toFixed(1)}°
                        </div>
                        <div className="text-mono text-[10px] text-muted-foreground">
                          {a.seen}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
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
  delta,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit?: string;
  accent?: "critical";
  delta?: string;
}) {
  return (
    <div className="panel p-4">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-muted-foreground">
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
      {delta && (
        <div className="mt-1 text-mono text-[11px] text-muted-foreground">
          {delta}
        </div>
      )}
    </div>
  );
}
