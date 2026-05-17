const states = [
  {
    title: "Normal",
    body: "Stable operating behaviour.",
    action: "Continue normal monitoring.",
    accent: "var(--risk-normal)",
  },
  {
    title: "Watch",
    body: "Early change detected. Continue monitoring.",
    action: "Keep watching the pattern closely.",
    accent: "var(--risk-watch)",
  },
  {
    title: "Elevated",
    body: "Abnormal rise or pattern shift. Inspection recommended.",
    action: "Review maintenance or inspection options.",
    accent: "var(--risk-elevated)",
  },
  {
    title: "Critical",
    body: "High-risk condition. Immediate action required.",
    action: "Escalate for urgent action.",
    accent: "var(--risk-critical)",
  },
];

export function RiskIntelligence() {
  return (
    <section id="risk" className="mt-24 overflow-hidden sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="reveal text-xs font-medium uppercase text-primary">
              Risk Intelligence
            </div>
            <h2 className="reveal mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
              Risk states your team can act on
            </h2>
            <p className="reveal mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              ThermoGuard AI turns complex thermal behaviour into clear operating states, helping
              teams know when to monitor, prepare, inspect, or act immediately.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {states.map((state, index) => (
                <article
                  key={state.title}
                  className="panel reveal group relative overflow-hidden p-4 transition duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-glow-primary)]"
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  <div
                    className="absolute inset-y-0 left-0 w-1"
                    style={{ backgroundColor: state.accent }}
                  />
                  <div className="flex items-start gap-3 pl-2">
                    <span
                      className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_18px_currentColor]"
                      style={{ color: state.accent, backgroundColor: state.accent }}
                    />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-[15px] font-semibold">{state.title}</h3>
                        <span className="text-mono text-[10px] uppercase text-muted-foreground">
                          State {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{state.body}</p>
                      <p className="mt-2 text-xs text-muted-foreground/80">{state.action}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="reveal mt-5 max-w-lg text-xs text-muted-foreground">
              Each state is designed to make risk legible without overwhelming operators with raw
              thermal data.
            </p>
          </div>

          <div className="reveal lg:col-span-7">
            <div className="panel-strong relative overflow-hidden p-2">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,oklch(0.82_0.13_205_/_14%),transparent_38%)]" />
              <img
                src="/sections/risk%20intelligence/risk-intelligence-operating-states.png"
                alt="ThermoGuard AI gateway, wireless sensor, and four colour-coded operating state cards"
                className="relative aspect-[16/11] w-full rounded-[calc(var(--radius-lg)-0.25rem)] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
