import "./Card.css";

export default function Card({ title, children, className = "" }) {
  return (
    <div className={`ds-card ${className}`}>
      <div className="ds-card-body">
        {title ? <h4 className="ds-card-title">{title}</h4> : null}
        {children}
      </div>
    </div>
  );
}
