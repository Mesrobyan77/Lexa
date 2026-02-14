import "./LatestTransactions.css";

export default function LatestTransactions({ rows = [] }) {
  return (
    <div className="lt">
      <div className="lt-scroll">
        {rows.map((r) => (
          <div className="lt-row" key={r.id}>
            <div className="lt-name-avatar">
              <img className="lt-avatar" src={r.avatar} alt={r.name} />
              <div className="lt-name">{r.name}</div>
            </div>

            <div className="lt-status">
              <span className={`lt-dot lt-dot--${r.statusType}`} />
              <span className="lt-status-text">{r.statusText}</span>
            </div>

            <div className="lt-amount">
              <div className="lt-amount-value">{r.amount}</div>
              <div className="lt-amount-label">Amount</div>
            </div>

            <div className="lt-date">
              <div className="lt-date-value">{r.date}</div>
              <div className="lt-date-label">Date</div>
            </div>

            <button className="lt-edit" type="button">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
