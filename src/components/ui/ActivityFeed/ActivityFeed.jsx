import "./ActivityFeed.css";

export default function ActivityFeed({ date, text }) {
  return (
    <li className="ds-feed-item">
      <span className="ds-feed-dot" aria-hidden="true" />
      <div className="ds-feed-bubble">
        <div className="ds-feed-date">{date}</div>
        <div className="ds-feed-text">{text}</div>
      </div>
    </li>
  );
}
