import { Zap } from "lucide-react";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "#platform" },
      { label: "Risk Intelligence", href: "#risk" },
      { label: "Workflow", href: "#workflow" },
      { label: "Use Cases", href: "#use-cases" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Request a demo", href: "#contact" },
      { label: "demo@thermoguard.ai", href: "mailto:demo@thermoguard.ai" },
      { label: "engineering@thermoguard.ai", href: "mailto:engineering@thermoguard.ai" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-28 border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                <Zap className="h-4 w-4 text-primary" />
              </span>
              <span className="text-base font-semibold">ThermoGuard AI</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              AI-assisted thermal-risk monitoring for electrical panels,
              switchgear rooms, and critical power environments.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="text-xs font-semibold uppercase">{g.title}</div>
                <ul className="mt-3 space-y-2">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--hairline)] pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} ThermoGuard AI. All rights reserved.</div>
          <div className="max-w-2xl sm:text-right">
            ThermoGuard AI is a decision-support platform and does not replace
            qualified electrical inspection or statutory maintenance
            requirements.
          </div>
        </div>
      </div>
    </footer>
  );
}
