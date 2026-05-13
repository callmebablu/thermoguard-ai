const COLS = 12;
const ROWS = 6;

// Deterministic pseudo-random thermal pattern
function heat(x: number, y: number) {
  const cx = 8.5;
  const cy = 2;
  const d = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
  const noise = ((x * 31 + y * 17) % 7) / 14;
  return Math.max(0, Math.min(1, 0.9 - d / 7 + noise));
}

function color(t: number) {
  if (t > 0.78) return "var(--risk-critical)";
  if (t > 0.6) return "var(--risk-elevated)";
  if (t > 0.42) return "var(--risk-watch)";
  return "var(--risk-normal)";
}

export function ThermalMap() {
  const cells = [];
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const t = heat(x, y);
      cells.push(
        <rect
          key={`${x}-${y}`}
          x={x * 40 + 2}
          y={y * 40 + 2}
          width={36}
          height={36}
          rx={4}
          fill={color(t)}
          opacity={0.25 + t * 0.6}
        />,
      );
    }
  }
  return (
    <div className="panel p-4">
      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs uppercase text-muted-foreground">
            Switchgear Room A · Thermal map
          </div>
          <div className="text-sm font-medium">Last updated 12s ago</div>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <Legend color="var(--risk-normal)" label="Normal" />
          <Legend color="var(--risk-watch)" label="Watch" />
          <Legend color="var(--risk-elevated)" label="Elevated" />
          <Legend color="var(--risk-critical)" label="Critical" />
        </div>
      </div>
      <svg
        viewBox={`0 0 ${COLS * 40} ${ROWS * 40}`}
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {cells}
      </svg>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="inline-block h-2 w-2 rounded-sm"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}
