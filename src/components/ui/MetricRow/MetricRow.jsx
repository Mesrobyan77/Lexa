import "./MetricRow.css";

export default function MetricRow({ items, className }) {
  return (
    <div
      className={
        className === "sec"
          ? "ds-metrics sec"
          : `ds-metrics ds-metrics--${items.length}`
      }
    >
      {items.map((it) => (
        <div className="ds-metric" key={it.label}>
          <h5 className="ds-metric-value">{it.value}</h5>
          <p className="ds-metric-label">{it.label}</p>
        </div>
      ))}
    </div>
  );
}
