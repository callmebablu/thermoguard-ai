import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  Network,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const plans = [
  {
    icon: Building2,
    name: "Starter",
    fit: "For teams beginning with critical panel monitoring.",
    scope: "Single-site deployment scoping",
    cta: "Request Quote",
    features: [
      "Priority panel monitoring plan",
      "Risk-state dashboard access",
      "Configurable alert workflow",
      "Maintenance evidence history",
    ],
  },
  {
    icon: Network,
    name: "Professional",
    fit: "For multi-panel and multi-site operations.",
    scope: "Portfolio-ready rollout planning",
    cta: "Talk to Sales",
    featured: true,
    features: [
      "Multi-site operational visibility",
      "Asset risk prioritisation",
      "Alert lifecycle tracking",
      "Reporting export readiness",
    ],
  },
  {
    icon: Factory,
    name: "Enterprise",
    fit: "For custom deployment, integrations, analytics, and support.",
    scope: "Custom architecture and support model",
    cta: "Contact Sales",
    features: [
      "Integration pathway scoping",
      "Advanced reporting requirements",
      "Custom escalation ownership",
      "Managed rollout support",
    ],
  },
];

export function PlansSection() {
  return (
    <section id="plans" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Plans"
          title="Commercial pathways shaped around site requirements."
          description="Each plan starts with the same discovery conversation, then scopes asset count, site complexity, alert workflows, reporting needs, and integration readiness."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`reveal flex flex-col p-6 ${
                plan.featured ? "panel-strong" : "panel"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/25">
                  <plan.icon className="h-5 w-5 text-primary" />
                </div>
                {plan.featured && (
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-mono text-[10px] uppercase text-primary">
                    Common fit
                  </span>
                )}
              </div>

              <div className="mt-5">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {plan.fit}
                </p>
              </div>

              <div className="mt-5 rounded-md border border-[var(--hairline)] bg-elevated/45 px-3 py-2">
                <div className="text-mono text-[10px] uppercase text-muted-foreground">
                  Commercial basis
                </div>
                <div className="mt-1 text-sm font-medium">{plan.scope}</div>
              </div>

              <ul className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                className="mt-6 w-full justify-between"
              >
                <a href="#contact">
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="reveal mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Request a quote, talk to sales, or contact sales all begin with a
          demo-led scoping conversation. No fixed public pricing is shown.
        </p>
      </div>
    </section>
  );
}
