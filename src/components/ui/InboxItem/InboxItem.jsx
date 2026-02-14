import "./InboxItem.css";

export default function InboxItem({ img, name, text, time }) {
  return (
    <div className="ds-inbox-item">
      <div className="ds-inbox-item-box">
        <img className="ds-avatar" src={img} alt={name} />
        <div className="ds-inbox-main">
          <h6 className="ds-inbox-name">{name}</h6>
          <p className="ds-inbox-text">{text}</p>
        </div>
      </div>
      <div className="ds-inbox-time">{time}</div>
    </div>
  );
}
