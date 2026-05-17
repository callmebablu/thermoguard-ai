import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const links = [
  { href: "#how-it-works", id: "how-it-works", label: "How It Works" },
  { href: "#use-cases", id: "use-cases", label: "Use Cases" },
  { href: "#integrations", id: "integrations", label: "Integrations" },
  { href: "#pricing", id: "pricing", label: "Pricing" },
  { href: "#contact", id: "contact", label: "Book Demo" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-[var(--hairline)] bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
            <Zap className="h-4 w-4 text-primary" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">ThermoGuard AI</span>
          <span className="hidden h-5 items-center rounded border border-[var(--hairline)] bg-elevated/60 px-1.5 text-[10px] uppercase text-muted-foreground sm:inline-flex">
            Platform
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <Button asChild size="sm">
            <a href="#contact">Book demo</a>
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-md border border-[var(--hairline)] bg-surface lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          aria-hidden
          className="fixed inset-0 top-16 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-16 z-50 origin-top border-t border-[var(--hairline)] bg-background/95 backdrop-blur transition-transform duration-200 lg:hidden ${
          open ? "translate-y-0" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-3 text-base hover:bg-elevated ${
                active === l.id ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="mt-3 h-11 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Book demo
            </a>
          </Button>
          <div className="mt-3 flex items-center gap-2 px-3 text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--risk-normal)]" />
            All systems nominal · 148 panels monitored
          </div>
        </nav>
      </div>
    </header>
  );
}
