import { useEffect, useRef, useState } from "react";
import {
  BellRing,
  Brain,
  ClipboardCheck,
  ClipboardList,
  Database,
  Radio,
  ServerCog,
  ThermometerSun,
  Wrench,
  Zap,
} from "lucide-react";
import { RiskBadge } from "@/components/mocks/RiskBadge";
import { Sparkline } from "@/components/mocks/TrendChart";
import { SectionHeading } from "./SectionHeading";

const storySteps = [
  {
    icon: ServerCog,
    title: "Hidden thermal risk",
    body: "Risk starts inside real panels, switchgear, and critical power assets where abnormal heat can build between inspections.",
  },
  {
    icon: ThermometerSun,
    title: "Heat points emerge",
    body: "Priority zones glow where loose connections, load imbalance, or degradation may show up as abnormal temperature rise.",
  },
  {
    icon: Radio,
    title: "Sensors monitor",
    body: "Thermal sensors watch selected points continuously, giving teams visibility beyond scheduled thermography passes.",
  },
  {
    icon: Database,
    title: "Live telemetry flows",
    body: "Live temperature data moves from the monitored asset into a structured operating history for each panel, phase, and site.",
  },
  {
    icon: Brain,
    title: "AI interprets behaviour",
    body: "ThermoGuard AI compares current readings with learned baselines, drift, persistence, and operating context.",
  },
  {
    icon: Zap,
    title: "Risk state assigned",
    body: "The platform converts thermal behaviour into Normal, Watch, Elevated, or Critical states that teams can understand quickly.",
  },
  {
    icon: BellRing,
    title: "Alert routed",
    body: "Risk-scored alerts are routed to the right owner so response can begin before the issue becomes operational disruption.",
  },
  {
    icon: Wrench,
    title: "Action recommended",
    body: "Maintenance teams receive practical context for inspection, prioritisation, and follow-up planning.",
  },
  {
    icon: ClipboardList,
    title: "Evidence recorded",
    body: "Alert history, response activity, and monitoring evidence stay available for reporting and future inspection.",
  },
];

const readings = [
  { label: "PNL-04", temp: "38.2", level: "normal" as const, trend: [36, 37, 37, 38, 38] },
  { label: "PNL-21", temp: "51.7", level: "watch" as const, trend: [44, 45, 47, 49, 52] },
  { label: "PNL-08", temp: "62.1", level: "elevated" as const, trend: [48, 52, 55, 59, 62] },
];

export function ProductExperience() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const index = Number(visible?.target.getAttribute("data-story-step"));
        if (Number.isFinite(index)) setActiveStep(index);
      },
      {
        rootMargin: "-38% 0px -42% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    stepRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From hidden heat to recorded maintenance evidence."
          description="A single product journey connects field sensors, live telemetry, AI interpretation, risk states, routed alerts, maintenance action, and reporting history."
        />

        <div className="mt-12 hidden gap-8 lg:grid lg:grid-cols-12 lg:items-start">
          <div className="reveal sticky top-24 lg:col-span-5">
            <StoryScene activeStep={activeStep} />
          </div>

          <ol className="grid gap-4 lg:col-span-7">
            {storySteps.map((step, index) => (
              <li
                key={step.title}
                ref={(node) => {
                  stepRefs.current[index] = node;
                }}
                data-story-step={index}
                className={`panel reveal p-5 transition-colors duration-300 motion-reduce:transition-none ${
                  activeStep === index ? "ring-1 ring-primary/35" : ""
                }`}
              >
                <StepContent step={step} index={index} active={activeStep === index} />
              </li>
            ))}
          </ol>
        </div>

        <ol className="mt-12 grid gap-4 lg:hidden">
          {storySteps.map((step, index) => (
            <li key={step.title} className="panel reveal overflow-hidden p-5">
              <MobileFrame step={index} />
              <div className="mt-5">
                <StepContent step={step} index={index} active />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepContent({
  step,
  index,
  active,
}: {
  step: (typeof storySteps)[number];
  index: number;
  active: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-md ring-1 transition-colors duration-300 motion-reduce:transition-none ${
          active ? "bg-primary/15 ring-primary/35" : "bg-primary/10 ring-primary/25"
        }`}
      >
        <step.icon className="h-5 w-5 text-primary" />
      </div>
      <div className="min-w-0">
        <div className="text-mono text-[10px] uppercase text-muted-foreground">
          Step {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="mt-1 text-base font-semibold">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
      </div>
    </div>
  );
}

function StoryScene({ activeStep }: { activeStep: number }) {
  const visible = (step: number) => activeStep >= step;

  return (
    <div className="panel-strong overflow-hidden p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-mono text-[11px] uppercase text-primary">Product loop</p>
          <h3 className="mt-1 text-xl font-semibold">Panel risk becomes action</h3>
        </div>
        <div className="text-right">
          <div className="text-mono text-[10px] uppercase text-muted-foreground">
            Frame {String(activeStep + 1).padStart(2, "0")}
          </div>
          <div className="mt-1 text-xs text-primary">{storySteps[activeStep].title}</div>
        </div>
      </div>

      <div className="mt-6 rounded-md border border-[var(--hairline)] bg-background/45 p-4">
        <div className="relative mx-auto min-h-[34rem] max-w-md overflow-hidden rounded-md border border-[var(--hairline)] bg-[linear-gradient(180deg,oklch(0.16_0.018_245/0.96),oklch(0.12_0.018_245/0.96))] p-4">
          <div aria-hidden className="grid-bg absolute inset-0 opacity-25" />

          <div className="relative flex items-center justify-between">
            <div className="text-mono text-[10px] uppercase text-muted-foreground">
              Switchgear room · Row 4
            </div>
            <span
              className={`inline-flex items-center gap-1.5 text-mono text-[10px] uppercase transition-colors duration-300 motion-reduce:transition-none ${
                visible(3) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  visible(3) ? "bg-primary" : "bg-muted-foreground/40"
                }`}
              />
              {visible(3) ? "Live telemetry" : "Asset view"}
            </span>
          </div>

          <div className="relative mt-5 h-[29rem]">
            <PanelVisual heat={visible(1)} sensors={visible(2)} />
            <TelemetryLines active={visible(3)} />
            <AiProcessingCard active={visible(4)} />
            <RiskStateCard active={visible(5)} />
            <AlertCard active={visible(6)} />
            <ActionCard active={visible(7)} />
            <EvidenceTimeline active={visible(8)} />
          </div>
        </div>
      </div>

      <div
        className={`mt-4 space-y-2 transition-opacity duration-300 motion-reduce:transition-none ${
          visible(5) ? "opacity-100" : "opacity-45"
        }`}
      >
        {readings.map((reading) => (
          <div
            key={reading.label}
            className="flex items-center justify-between gap-3 rounded-md border border-[var(--hairline)] bg-elevated/45 px-3 py-2"
          >
            <div className="min-w-0">
              <div className="truncate text-sm font-medium">{reading.label}</div>
              <div className="text-mono text-[11px] text-muted-foreground">
                Live temp {reading.temp} deg C
              </div>
            </div>
            <div className="hidden w-20 sm:block">
              <Sparkline
                points={reading.trend}
                color={
                  reading.level === "elevated"
                    ? "var(--risk-elevated)"
                    : reading.level === "watch"
                      ? "var(--risk-watch)"
                      : "var(--risk-normal)"
                }
              />
            </div>
            <RiskBadge level={reading.level} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelVisual({ heat, sensors }: { heat: boolean; sensors: boolean }) {
  return (
    <div className="absolute left-0 top-0 w-[13.5rem]">
      <div className="relative h-64 rounded-md border border-[var(--hairline)] bg-elevated/75 p-4 shadow-lg">
        <div className="mb-4 h-2 w-20 rounded bg-muted-foreground/30" />
        {[0, 1, 2, 3].map((row) => (
          <div key={row} className="mb-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((col) => (
              <span
                key={`${row}-${col}`}
                className="h-8 rounded border border-[var(--hairline)] bg-background/70"
              />
            ))}
          </div>
        ))}
        <HeatPoint active={heat} className="left-[4.2rem] top-[9.5rem]" tone="normal" label="H1" />
        <HeatPoint active={heat} className="right-[2.1rem] top-[6rem]" tone="elevated" label="H2" />
        <HeatPoint active={heat} className="right-[3.5rem] top-[11.2rem]" tone="watch" label="H3" />
        <SensorMarker active={sensors} className="right-[0.85rem] top-[6.9rem]" label="S2" />
        <SensorMarker active={sensors} className="right-[2.2rem] top-[12.1rem]" label="S3" />
      </div>
    </div>
  );
}

function HeatPoint({
  active,
  className,
  tone,
  label,
}: {
  active: boolean;
  className: string;
  tone: "normal" | "watch" | "elevated";
  label: string;
}) {
  const color =
    tone === "elevated"
      ? "bg-[var(--risk-elevated)] text-[var(--risk-elevated)]"
      : tone === "watch"
        ? "bg-[var(--risk-watch)] text-[var(--risk-watch)]"
        : "bg-[var(--risk-normal)] text-[var(--risk-normal)]";

  return (
    <span
      className={`absolute ${className} transition-all duration-500 motion-reduce:transition-none ${
        active ? "scale-100 opacity-100" : "scale-50 opacity-0"
      }`}
      aria-label={label}
    >
      <span className={`pulse-dot block h-2.5 w-2.5 rounded-full ${color}`} />
    </span>
  );
}

function SensorMarker({
  active,
  className,
  label,
}: {
  active: boolean;
  className: string;
  label: string;
}) {
  return (
    <span
      className={`absolute ${className} rounded border border-primary/30 bg-background/90 px-1.5 py-0.5 text-mono text-[9px] text-primary shadow-sm transition-all duration-500 motion-reduce:transition-none ${
        active ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      {label}
    </span>
  );
}

function TelemetryLines({ active }: { active: boolean }) {
  return (
    <svg
      className={`absolute left-[12rem] top-[5.9rem] h-44 w-32 overflow-visible transition-opacity duration-500 motion-reduce:transition-none ${
        active ? "opacity-100" : "opacity-0"
      }`}
      viewBox="0 0 150 190"
      aria-hidden
    >
      <path
        d="M2 20 C55 20 55 58 118 58"
        fill="none"
        stroke="var(--primary)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      <path
        d="M2 108 C48 108 58 144 122 144"
        fill="none"
        stroke="var(--primary)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      <circle cx="72" cy="38" r="3" fill="var(--primary)" />
      <circle cx="90" cy="130" r="3" fill="var(--primary)" opacity="0.75" />
    </svg>
  );
}

function AiProcessingCard({ active }: { active: boolean }) {
  return (
    <div
      className={`absolute right-0 top-4 w-48 rounded-md border border-primary/25 bg-primary/10 p-3 shadow-lg transition-all duration-500 motion-reduce:transition-none ${
        active ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-2">
        <Brain className="h-4 w-4 text-primary" />
        <span className="text-mono text-[10px] uppercase text-muted-foreground">
          AI interpretation
        </span>
      </div>
      <div className="mt-3 space-y-2">
        <Metric label="Baseline drift" value="24%" />
        <Metric label="Persistence" value="28%" />
        <Metric label="Magnitude" value="32%" />
      </div>
    </div>
  );
}

function RiskStateCard({ active }: { active: boolean }) {
  return (
    <div
      className={`absolute right-0 top-[10.4rem] w-48 rounded-md border border-[var(--hairline)] bg-background/90 p-3 shadow-lg transition-all duration-500 motion-reduce:transition-none ${
        active ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium">PNL-08 · Phase A</span>
        <RiskBadge level="elevated" />
      </div>
      <div className="mt-2">
        <Sparkline points={[48, 50, 52, 55, 58, 60, 62]} color="var(--risk-elevated)" />
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <RiskBadge level="normal" label="Normal" />
        <RiskBadge level="watch" label="Watch" />
        <RiskBadge level="elevated" label="Elevated" />
      </div>
    </div>
  );
}

function AlertCard({ active }: { active: boolean }) {
  return (
    <div
      className={`absolute left-0 top-[17.8rem] w-[12.6rem] rounded-md border border-[var(--hairline)] bg-elevated/85 p-3 shadow-lg transition-all duration-500 motion-reduce:transition-none ${
        active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-2 text-sm font-medium">
        <BellRing className="h-4 w-4 text-primary" />
        Alert routed
      </div>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        Owner: maintenance lead · status assigned
      </p>
    </div>
  );
}

function ActionCard({ active }: { active: boolean }) {
  return (
    <div
      className={`absolute right-0 top-[19.2rem] w-48 rounded-md border border-[var(--hairline)] bg-elevated/85 p-3 shadow-lg transition-all duration-500 motion-reduce:transition-none ${
        active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-2 text-sm font-medium">
        <Wrench className="h-4 w-4 text-primary" />
        Action recommended
      </div>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        Inspect phase A termination and compare load profile.
      </p>
    </div>
  );
}

function EvidenceTimeline({ active }: { active: boolean }) {
  const events = ["Detected", "Assigned", "Inspected", "Recorded"];

  return (
    <div
      className={`absolute inset-x-0 bottom-0 rounded-md border border-[var(--hairline)] bg-background/90 p-3 shadow-lg transition-all duration-500 motion-reduce:transition-none ${
        active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-2 text-sm font-medium">
        <ClipboardCheck className="h-4 w-4 text-primary" />
        Evidence history
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {events.map((event, index) => (
          <div key={event} className="relative">
            {index < events.length - 1 && (
              <span className="absolute left-[1.15rem] right-[-0.65rem] top-3 h-px bg-primary/25" />
            )}
            <span className="relative z-10 grid h-6 w-6 place-items-center rounded-full border border-primary/30 bg-primary/10 text-mono text-[9px] text-primary">
              {index + 1}
            </span>
            <div className="mt-1 text-[10px] text-muted-foreground">{event}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileFrame({ step }: { step: number }) {
  return (
    <div className="rounded-md border border-[var(--hairline)] bg-background/45 p-3">
      <div className="relative h-36 overflow-hidden rounded-md border border-[var(--hairline)] bg-[linear-gradient(180deg,oklch(0.16_0.018_245/0.96),oklch(0.12_0.018_245/0.96))] p-3">
        <div className="absolute left-3 top-3 h-28 w-24 rounded-md border border-[var(--hairline)] bg-elevated/75 p-2">
          <div className="mb-2 h-1.5 w-12 rounded bg-muted-foreground/30" />
          {[0, 1, 2].map((row) => (
            <div key={row} className="mb-2 grid grid-cols-3 gap-1.5">
              {[0, 1, 2].map((col) => (
                <span
                  key={`${row}-${col}`}
                  className="h-5 rounded border border-[var(--hairline)] bg-background/70"
                />
              ))}
            </div>
          ))}
          {step >= 1 && (
            <span className="pulse-dot absolute right-4 top-12 h-2 w-2 rounded-full bg-[var(--risk-elevated)] text-[var(--risk-elevated)]" />
          )}
          {step >= 2 && (
            <span className="absolute right-1 top-14 rounded border border-primary/30 bg-background/90 px-1 text-mono text-[8px] text-primary">
              S2
            </span>
          )}
        </div>

        {step >= 3 && (
          <div className="absolute left-[7rem] top-[4.3rem] h-px w-16 bg-primary/45">
            <span className="absolute right-0 top-[-3px] h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
        )}

        {step >= 4 && (
          <div className="absolute right-3 top-3 w-36 rounded-md border border-primary/25 bg-primary/10 p-2">
            <div className="flex items-center gap-1.5 text-mono text-[9px] uppercase text-muted-foreground">
              <Brain className="h-3 w-3 text-primary" />
              AI
            </div>
            <div className="mt-2 h-1.5 rounded bg-primary/60" />
            <div className="mt-1.5 h-1.5 w-3/4 rounded bg-muted-foreground/25" />
          </div>
        )}

        {step >= 5 && (
          <div className="absolute right-3 top-[5.2rem]">
            <RiskBadge level="elevated" />
          </div>
        )}

        {step >= 6 && (
          <div className="absolute bottom-3 left-3 rounded-md border border-[var(--hairline)] bg-elevated/90 px-2 py-1.5 text-xs">
            <BellRing className="mr-1 inline h-3 w-3 text-primary" />
            Alert routed
          </div>
        )}

        {step >= 7 && (
          <div className="absolute bottom-3 right-3 rounded-md border border-[var(--hairline)] bg-elevated/90 px-2 py-1.5 text-xs">
            <Wrench className="mr-1 inline h-3 w-3 text-primary" />
            Action
          </div>
        )}

        {step >= 8 && (
          <div className="absolute inset-x-3 bottom-3 rounded-md border border-primary/25 bg-background/95 px-2 py-1.5 text-xs">
            <ClipboardCheck className="mr-1 inline h-3 w-3 text-primary" />
            Evidence recorded
          </div>
        )}
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-mono">{value}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-background/70">
        <div className="h-full rounded-full bg-primary" style={{ width: value }} />
      </div>
    </div>
  );
}
