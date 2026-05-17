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
    <section id="contact" className="mt-20 sm:mt-28 lg:mt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-[var(--radius-lg)] border border-primary/15 bg-elevated/45 p-6 shadow-[0_28px_90px_oklch(0_0_0_/_28%)] sm:p-8 lg:p-10">
          <div
            aria-hidden
            className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.82_0.13_205/0.14),transparent_58%),linear-gradient(180deg,oklch(0.245_0.02_245/0.64),oklch(0.18_0.018_245/0.82))]"
          />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:items-start">
            <div>
              <div className="text-mono text-[11px] font-medium uppercase text-primary">
                Request a demo or quote
              </div>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                Bring continuous thermal-risk intelligence to your critical power assets.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Talk to our team about demo access, quote scoping, and deployment planning for your
                sites.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {expectations.map((e) => (
                  <div
                    key={e.title}
                    className="rounded-lg border border-[var(--hairline)] bg-background/28 p-4 transition-colors hover:border-primary/25 hover:bg-primary/[0.035]"
                  >
                    <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/20">
                      <e.icon aria-hidden="true" className="h-4 w-4 text-primary" />
                    </div>
                    <div className="mt-2 text-sm font-semibold">{e.title}</div>
                    <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {e.body}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-xl border-t border-[var(--hairline)] pt-4 text-xs leading-relaxed text-muted-foreground">
                Decision-support platform — does not replace qualified electrical inspection or
                statutory maintenance requirements.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--hairline)] bg-background/38 p-5 shadow-[inset_0_1px_0_oklch(1_0_0_/_5%),0_18px_54px_oklch(0_0_0_/_22%)] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="text-sm font-semibold">Tell us about your site</div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-mono text-[10px] uppercase text-primary">
                  Contact intent
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Share a few details for a demo, quote, or sales conversation. Submitting opens your
                email client.
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
                      <CalendarCheck2 aria-hidden="true" className="h-4 w-4" />
                      Request a demo
                    </span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full justify-between border-primary/20 bg-primary/[0.03] hover:border-primary/45"
                >
                  <a href="mailto:demo@thermoguard.ai?subject=ThermoGuard%20AI%20sales%20discussion">
                    <span className="flex items-center gap-2">
                      <MessageSquareText aria-hidden="true" className="h-4 w-4" />
                      Talk to sales
                    </span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[var(--hairline)] pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Mail aria-hidden="true" className="h-3.5 w-3.5 text-primary" />
                  <a className="text-foreground hover:underline" href="mailto:demo@thermoguard.ai">
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
      <span className="text-mono text-[10px] uppercase text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          className="mt-1 w-full resize-none rounded-md border border-[var(--hairline)] bg-background/35 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-[inset_0_1px_0_oklch(0_0_0_/_22%)] transition focus:border-primary/45 focus:outline-none focus:ring-1 focus:ring-primary/45"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="mt-1 w-full rounded-md border border-[var(--hairline)] bg-background/35 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-[inset_0_1px_0_oklch(0_0_0_/_22%)] transition focus:border-primary/45 focus:outline-none focus:ring-1 focus:ring-primary/45"
        />
      )}
    </label>
  );
}
