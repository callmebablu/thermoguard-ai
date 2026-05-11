import {
  BellRing,
  ClipboardCheck,
  FileBarChart,
  Radar,
  ShieldAlert,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: Radar,
    title: "Detect",
    body: "Continuously capture thermal behaviour across monitored assets.",
  },
  {
    icon: ShieldAlert,
    title: "Classify",
    body: "AI-assisted risk scoring assigns Normal, Watch, Elevated, or Critical.",
  },
  {
    icon: BellRing,
    title: "Notify",
    body: "Configurable alerts and escalation paths reach the right teams.",
  },
  {
    icon: ClipboardCheck,
    title: "Recommend",
    body: "Decision-support guidance suggests the next maintenance action.",
  },
  {
    icon: FileBarChart,
    title: "Track",
    body: "Every event, response, and trend is logged as maintenance evidence.",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflow"
          title="From thermal data to maintenance evidence."
          description="A clear, repeatable loop from continuous monitoring to action — designed to fit existing maintenance and operations processes."
        />

        {/* Desktop: rail + circles */}
        <div className="relative mt-14 hidden lg:block">
          <div className="absolute left-[6%] right-[6%] top-6 h-px bg-[var(--hairline)]" />
          <ol className="relative grid grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <li key={s.title} className="reveal flex flex-col items-center text-center">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-[var(--hairline)] bg-background ring-1 ring-primary/25">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-3 text-mono text-[11px] uppercase text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-0.5 text-base font-semibold">{s.title}</div>
                <div className="mt-2 max-w-[16rem] text-sm text-muted-foreground">
                  {s.body}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile: vertical rail */}
        <ol className="relative mt-12 space-y-4 pl-8 lg:hidden">
          <span
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 w-px bg-[var(--hairline)]"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="reveal relative">
              <span className="absolute -left-8 grid h-8 w-8 place-items-center rounded-full border border-[var(--hairline)] bg-background ring-1 ring-primary/25">
                <s.icon className="h-4 w-4 text-primary" />
              </span>
              <div className="panel p-4">
                <div className="text-mono text-[11px] uppercase text-muted-foreground">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-0.5 text-base font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.body}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
