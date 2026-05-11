import { cn } from "@/lib/utils";

export type RiskLevel = "normal" | "watch" | "elevated" | "critical";

const config: Record<
  RiskLevel,
  { label: string; dot: string; text: string; ring: string; bg: string }
> = {
  normal: {
    label: "Normal",
    dot: "bg-[var(--risk-normal)]",
    text: "text-[var(--risk-normal)]",
    ring: "ring-[var(--risk-normal)]/30",
    bg: "bg-[var(--risk-normal)]/10",
  },
  watch: {
    label: "Watch",
    dot: "bg-[var(--risk-watch)]",
    text: "text-[var(--risk-watch)]",
    ring: "ring-[var(--risk-watch)]/30",
    bg: "bg-[var(--risk-watch)]/10",
  },
  elevated: {
    label: "Elevated",
    dot: "bg-[var(--risk-elevated)]",
    text: "text-[var(--risk-elevated)]",
    ring: "ring-[var(--risk-elevated)]/30",
    bg: "bg-[var(--risk-elevated)]/10",
  },
  critical: {
    label: "Critical",
    dot: "bg-[var(--risk-critical)]",
    text: "text-[var(--risk-critical)]",
    ring: "ring-[var(--risk-critical)]/40",
    bg: "bg-[var(--risk-critical)]/12",
  },
};

export function RiskBadge({
  level,
  label,
  className,
}: {
  level: RiskLevel;
  label?: string;
  className?: string;
}) {
  const c = config[level];
  const pulse = level === "critical";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1",
        c.bg,
        c.text,
        c.ring,
        className,
      )}
    >
      <span
        className={cn(
          "inline-block h-1.5 w-1.5 rounded-full",
          c.dot,
          pulse && "pulse-dot",
        )}
      />
      {label ?? c.label}
    </span>
  );
}
