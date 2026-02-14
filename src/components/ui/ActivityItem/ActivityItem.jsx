import "./ActivityItem.css";

export default function ActivityItem({ date, text }) {
  return (
    <li className="ds-feed-item">
      <span className="ds-feed-date">{date}</span>
      <span className="ds-feed-text">{text}</span>
    </li>
  );
}
