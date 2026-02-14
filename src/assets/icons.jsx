export default function MiniBarChart({
  color = "rgb(41, 187, 227)",
  width = 101,
  height = 32,
}) {
  const bars = [27, 15, 3, 21, 39, 51, 21, 3, 33, 51, 57, 45, 51];

  return (
    <svg
      viewBox="0 0 240 60"
      preserveAspectRatio="none"
      width={width}
      height={height}
    >
      <g transform="scale(1,-1)">
        {bars.map((h, i) => (
          <rect
            key={i}
            x={-3.75 + i * 19.5}
            y={-60}
            width="8.5"
            height={h}
            style={{
              strokeWidth: 5,
              stroke: color,
              fill: color,
            }}
          />
        ))}
      </g>
    </svg>
  );
}

export const WaveBackground = () => (
  <svg className="wave-bg" viewBox="0 0 500 200" preserveAspectRatio="none">
    <path
      d="M0,65 C150,-10 350,220 500,185 L500,0 L0,0 Z"
      fill="rgba(107, 95, 173, 0.5)"
    />
    <path
      d="M0,85 C150,15 350,240 500,200 L500,200 L0,200 Z"
      fill="rgba(122, 110, 191, 0.5)"
    />
  </svg>
);
