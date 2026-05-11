type Props = {
  points?: number[];
  height?: number;
  stroke?: string;
  fill?: string;
  showAxes?: boolean;
  className?: string;
};

const DEFAULT_POINTS = [
  38, 39, 41, 40, 42, 44, 43, 45, 46, 48, 47, 49, 51, 53, 52, 55, 58, 57, 60, 63,
  62, 65, 68, 66, 69, 72, 70, 73,
];

export function TrendChart({
  points = DEFAULT_POINTS,
  height = 160,
  stroke = "var(--risk-watch)",
  fill = "var(--risk-watch)",
  showAxes = true,
  className,
}: Props) {
  const w = 600;
  const h = height;
  const pad = 8;
  const min = Math.min(...points) - 4;
  const max = Math.max(...points) + 4;
  const stepX = (w - pad * 2) / (points.length - 1);
  const toY = (v: number) => h - pad - ((v - min) / (max - min)) * (h - pad * 2);

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${pad + i * stepX} ${toY(p)}`)
    .join(" ");
  const area =
    `${path} L ${pad + (points.length - 1) * stepX} ${h - pad} L ${pad} ${h - pad} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className={className}
      style={{ width: "100%", height }}
    >
      <defs>
        <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fill} stopOpacity="0.30" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </linearGradient>
      </defs>
      {showAxes &&
        [0.25, 0.5, 0.75].map((t) => (
          <line
            key={t}
            x1={pad}
            x2={w - pad}
            y1={pad + t * (h - pad * 2)}
            y2={pad + t * (h - pad * 2)}
            stroke="var(--hairline)"
            strokeDasharray="2 4"
          />
        ))}
      <path d={area} fill="url(#trendFill)" />
      <path d={path} fill="none" stroke={stroke} strokeWidth={2} />
    </svg>
  );
}

export function Sparkline({
  points,
  color = "var(--risk-watch)",
}: {
  points: number[];
  color?: string;
}) {
  const w = 80;
  const h = 24;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const stepX = w / (points.length - 1);
  const toY = (v: number) => h - ((v - min) / (max - min || 1)) * h;
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * stepX} ${toY(p)}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h}>
      <path d={d} fill="none" stroke={color} strokeWidth={1.5} />
    </svg>
  );
}
