import {
  ArrowRight,
  CalendarCheck2,
  Mail,
  MessageSquareText,
  Network,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const expectations = [
  {
    icon: CalendarCheck2,
    title: "30-min walkthrough",
    body: "Live tour of the platform, alerts, and risk classification.",
  },
  {
    icon: Network,
    title: "Integration review",
    body: "BMS, SCADA, CMMS, and reporting pathways discussed.",
  },
  {
    icon: Workflow,
    title: "Deployment scoping",
    body: "Single-site or multi-site rollout, sized to your environment.",
  },
];

export function FinalCTA() {
  return (
    <section id="contact" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="panel-strong reveal relative overflow-hidden p-6 sm:p-10">
          <div
            aria-hidden
            className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-30"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.82_0.13_205/0.16),transparent_60%)]"
          />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="text-mono text-[11px] font-medium uppercase text-primary">
                Request a demo or quote
              </div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Bring continuous thermal-risk intelligence to your critical
                power assets.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Talk to our team about demo access, quote scoping, and
                deployment planning for your sites.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {expectations.map((e) => (
                  <div key={e.title} className="panel p-4">
                    <e.icon className="h-4 w-4 text-primary" />
                    <div className="mt-2 text-sm font-semibold">{e.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {e.body}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                Decision-support platform — does not replace qualified
                electrical inspection or statutory maintenance requirements.
              </p>
            </div>

            <div className="panel p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Tell us about your site</div>
                <span className="text-mono text-[10px] uppercase text-muted-foreground">
                  Contact intent
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Share a few details for a demo, quote, or sales conversation.
                Submitting opens your email client.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Field label="Work email" placeholder="you@company.com" />
                <Field label="Company" placeholder="Acme Industrial" />
                <Field label="Sites under management" placeholder="e.g. 4" />
                <Field label="Role" placeholder="Maintenance manager" />
              </div>
              <Field
                label="What would you like to monitor?"
                placeholder="MV switchgear, MCC panels, distribution boards…"
                textarea
              />

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <Button asChild size="lg" className="w-full justify-between">
                  <a href="mailto:demo@thermoguard.ai?subject=ThermoGuard%20AI%20demo%20request">
                    <span className="flex items-center gap-2">
                      <CalendarCheck2 className="h-4 w-4" />
                      Request a demo
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full justify-between"
                >
                  <a href="mailto:demo@thermoguard.ai?subject=ThermoGuard%20AI%20sales%20discussion">
                    <span className="flex items-center gap-2">
                      <MessageSquareText className="h-4 w-4" />
                      Talk to sales
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[var(--hairline)] pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" />
                  <a
                    className="text-foreground hover:underline"
                    href="mailto:demo@thermoguard.ai"
                  >
                    demo@thermoguard.ai
                  </a>
                </span>
                <span>·</span>
                <span>Typical response within 1 business day.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  textarea,
}: {
  label: string;
  placeholder: string;
  textarea?: boolean;
}) {
  return (
    <label className={`block ${textarea ? "mt-3" : ""}`}>
      <span className="text-mono text-[10px] uppercase text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          className="panel-inset mt-1 w-full resize-none px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/50"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="panel-inset mt-1 w-full px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/50"
        />
      )}
    </label>
  );
}
