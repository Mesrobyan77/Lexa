import { WaveBackground } from "../../../assets/icons";
import "./StatCard.css";

export default function StatCard({
  title,
  value,
  badgeText,
  badgeType = "info",
  icon,
}) {
  return (
    <div className="stat-card">
      <WaveBackground />

      <div className="stat-card-icon">{icon}</div>

      <div className="stat-card-content">
        <div className="stat-card-box">
          <h6 className="stat-card-title">{title}</h6>
          <h2 className="stat-card-value">{value}</h2>
          <div className="stat-card-meta">
            <span className={`ds-badge ds-badge--${badgeType}`}>
              {badgeText}
            </span>
            <span className="stat-card-sub">From previous period</span>
          </div>
        </div>
      </div>
    </div>
  );
}
