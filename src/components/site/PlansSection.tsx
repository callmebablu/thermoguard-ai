import { ArrowRight, Boxes, Building2, CheckCircle2, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const plans = [
  {
    icon: Building2,
    name: "Starter Kit",
    fit: "For single-room or entry-level thermal monitoring.",
    price: "£899 + VAT",
    note: "1 gateway + 1 wireless sensor",
    badge: "Best place to start",
    cta: "Get Starter Kit",
    featured: true,
    features: [
      "1 gateway unit",
      "1 wireless sensor",
      "Dashboard access",
      "Risk-state monitoring",
      "Alerts",
      "Evidence history",
      "Standard setup support",
    ],
  },
  {
    icon: Boxes,
    name: "Professional",
    fit: "For multi-room, multi-sensor, or advanced deployment needs.",
    price: "Custom quote",
    note: "Final pricing depends on deployment scope and setup requirements.",
    cta: "Talk to Sales",
    features: [
      "Expanded sensor coverage",
      "Multi-zone monitoring",
      "Tailored deployment planning",
      "Optional maintenance workflow alignment",
      "Reporting/export requirements",
      "Deployment-specific setup costing",
    ],
  },
  {
    icon: Factory,
    name: "Enterprise",
    fit: "For larger businesses, enterprise workflows, and ongoing platform needs.",
    price: "Custom setup + subscription",
    note: "Setup cost is calculated in advance; subscription support is scoped if required.",
    cta: "Request Enterprise Plan",
    features: [
      "Larger-scale deployments",
      "Optional integrations",
      "Cooling/fan control pathways",
      "Custom escalation rules",
      "Enterprise reporting needs",
      "Subscription-based support/model if required",
      "Setup cost calculated in advance",
    ],
  },
];

export function PlansSection() {
  return (
    <section id="pricing" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose the ThermoGuard AI setup that fits your operation"
          description="Start with a single gateway and wireless sensor, or scale into a custom deployment with enterprise workflows, integrations, and subscription support."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-card reveal group flex flex-col p-6 ${
                plan.featured ? "pricing-card-featured lg:-translate-y-3" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/25 transition group-hover:bg-primary/15 group-hover:ring-primary/45">
                  <plan.icon aria-hidden="true" className="h-5 w-5 text-primary" />
                </div>
                <span
                  className={`rounded-full border px-2.5 py-1 text-mono text-[10px] uppercase ${
                    plan.featured
                      ? "border-primary/35 bg-primary/15 text-primary"
                      : "border-[var(--hairline)] bg-elevated/50 text-muted-foreground"
                  }`}
                >
                  {plan.badge ?? "Scoped plan"}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.fit}</p>
              </div>

              <div className="mt-6 rounded-md border border-[var(--hairline)] bg-background/35 p-4">
                <div className="text-mono text-[10px] uppercase text-muted-foreground">
                  Plan basis
                </div>
                <div
                  className={`mt-2 font-semibold tracking-tight ${
                    plan.featured ? "text-4xl text-primary sm:text-5xl" : "text-2xl"
                  }`}
                >
                  {plan.price}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {plan.note}
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                className="mt-6 w-full justify-between group-hover:border-primary/50 group-hover:shadow-[0_0_24px_oklch(0.82_0.13_205_/_12%)]"
              >
                <a href="#contact">
                  {plan.cta}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </Button>
            </article>
          ))}
        </div>

        <p className="reveal mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          Larger deployments are priced according to setup scope, sensor count, integration needs,
          and support requirements.
        </p>
      </div>
    </section>
  );
}
