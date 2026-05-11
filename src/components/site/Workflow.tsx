import { Fragment } from "react";
import {
  ArrowRight,
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
    <section id="workflow" className="mt-28 sm:mt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflow"
          title="From thermal data to maintenance evidence."
          description="A clear, repeatable loop from continuous monitoring to action — designed to fit existing maintenance and operations processes."
        />

        <div className="mt-12 hidden lg:block">
          <div className="grid grid-cols-9 items-stretch gap-0">
            {steps.map((s, i) => (
              <Fragment key={s.title}>
                <div className="col-span-1 reveal">
                  <StepCard step={i + 1} {...s} />
                </div>
                {i < steps.length - 1 && (
                  <div className="col-span-1 flex items-center justify-center text-muted-foreground">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        <ol className="mt-12 space-y-3 lg:hidden">
          {steps.map((s, i) => (
            <li key={s.title} className="reveal">
              <StepCard step={i + 1} {...s} horizontal />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepCard({
  step,
  icon: Icon,
  title,
  body,
  horizontal,
}: {
  step: number;
  icon: typeof Radar;
  title: string;
  body: string;
  horizontal?: boolean;
}) {
  return (
    <div className={`panel h-full p-5 ${horizontal ? "flex items-start gap-4" : ""}`}>
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/25`}
      >
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className={horizontal ? "" : "mt-4"}>
        <div className="text-mono text-xs text-muted-foreground">
          Step {step.toString().padStart(2, "0")}
        </div>
        <div className="text-base font-semibold">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground">{body}</div>
      </div>
    </div>
  );
}
