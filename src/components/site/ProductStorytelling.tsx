import { useEffect, useRef, useState } from "react";
import { thermoguardStoryFrames } from "./thermoguardStoryFrames";

export function ProductStorytelling() {
  const [activeFrame, setActiveFrame] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setReducedMotion(mediaQuery.matches);
    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncFrame = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(Math.max((-rect.top + 160) / scrollable, 0), 1);
      const nextFrame = Math.min(
        thermoguardStoryFrames.length - 1,
        Math.floor(progress * thermoguardStoryFrames.length),
      );

      setActiveFrame(nextFrame);
    };

    syncFrame();
    window.addEventListener("scroll", syncFrame, { passive: true });
    window.addEventListener("resize", syncFrame);

    return () => {
      window.removeEventListener("scroll", syncFrame);
      window.removeEventListener("resize", syncFrame);
    };
  }, []);

  const current = thermoguardStoryFrames[activeFrame];

  return (
    <section ref={sectionRef} id="how-it-works" className="relative mt-24 sm:mt-32 lg:mt-40">
      <div
        aria-hidden
        className="absolute inset-x-0 top-12 -z-10 h-[46rem] bg-[radial-gradient(ellipse_at_72%_20%,oklch(0.82_0.13_205/0.16),transparent_58%),radial-gradient(ellipse_at_18%_46%,oklch(0.30_0.04_260/0.18),transparent_56%)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="reveal text-mono text-xs uppercase text-primary">How it works</p>
          <h2
            className="reveal mt-3 max-w-2xl font-semibold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            From hidden heat to intelligent cooling action
          </h2>
        </div>

        <div className="mt-12 hidden lg:block lg:min-h-[660vh]">
          <div className="sticky top-24 grid min-h-[calc(100vh-7rem)] grid-cols-12 items-center gap-6">
            <div className="col-span-4">
              <div className="reveal">
                <div key={current.id} className="story-copy-transition">
                  <h3 className="text-3xl font-semibold leading-tight">{current.heading}</h3>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {current.copy}
                  </p>
                  <p className="mt-6 border-l border-primary/60 pl-4 text-base font-medium text-primary">
                    {current.keyLine}
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-9 gap-1.5" aria-hidden>
                  {thermoguardStoryFrames.map((frame, index) => (
                    <span
                      key={frame.id}
                      className={`h-1.5 rounded-full transition-colors duration-500 motion-reduce:transition-none ${
                        index <= activeFrame
                          ? "bg-primary shadow-[0_0_12px_oklch(0.82_0.13_205/0.34)]"
                          : "bg-elevated"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-8">
              <StoryVisual activeFrame={activeFrame} reducedMotion={reducedMotion} />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:hidden">
          {thermoguardStoryFrames.map((frame, index) => (
            <article key={frame.id} className="panel reveal overflow-hidden">
              <img
                src={frame.image}
                alt={frame.alt}
                className="aspect-video w-full object-cover"
                loading={index < 2 ? "eager" : "lazy"}
              />
              <div className="p-5">
                <div className="text-mono text-[10px] uppercase text-primary">
                  Frame {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-xl font-semibold">{frame.heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{frame.copy}</p>
                <p className="mt-4 border-l border-primary/60 pl-3 text-sm font-medium text-primary">
                  {frame.keyLine}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryVisual({
  activeFrame,
  reducedMotion,
}: {
  activeFrame: number;
  reducedMotion: boolean;
}) {
  return (
    <div className="reveal relative -mr-6 overflow-hidden rounded-lg border border-[var(--hairline)] bg-background/70 p-2 shadow-[var(--shadow-elevated)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_58%_36%,oklch(0.82_0.13_205/0.16),transparent_58%)]"
      />
      <div className="relative aspect-video overflow-hidden rounded-md border border-[var(--hairline)] bg-background">
        {thermoguardStoryFrames.map((frame, index) => {
          const active = index === activeFrame;
          const nearby = Math.abs(index - activeFrame) <= 1;
          return (
            <img
              key={frame.id}
              src={frame.image}
              alt={active ? frame.alt : ""}
              aria-hidden={!active}
              loading={index < 2 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform,filter] duration-900 ease-out motion-reduce:transition-opacity ${
                active ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform:
                  active && !reducedMotion
                    ? "scale(1.01)"
                    : nearby && !reducedMotion
                      ? "scale(1.04)"
                      : "scale(1)",
                filter: active ? "brightness(1.08) contrast(1.05)" : "brightness(0.84)",
              }}
            />
          );
        })}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,oklch(0.08_0.018_245/0.04),oklch(0.08_0.018_245/0.22))]"
        />
      </div>
    </div>
  );
}
