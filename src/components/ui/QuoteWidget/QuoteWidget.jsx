import "./QuoteWidget.css";

export default function QuoteWidget({ quote, img, name, role }) {
  return (
    <div className="ds-quote">
      <div className="ds-quote-top">
        <span className="ds-quote-icon">“</span>
        <p className="ds-quote-text">{quote}</p>
      </div>

      <div className="ds-quote-bottom">
        <img className="ds-avatar" src={img} alt={name} />
        <div>
          <h6 className="ds-person-name">{name}</h6>
          <p className="ds-person-role">{role}</p>
        </div>
      </div>
    </div>
  );
}
