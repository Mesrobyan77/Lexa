import "./LatestOrders.css";

export default function LatestOrders({ rows = [] }) {
  return (
    <div className="lo">
      <div className="lo-scroll">
        {rows.map((r) => (
          <div className="lo-row" key={r.id}>
            <div className="lo-id">{r.orderId}</div>

            <div className="lo-user">
              <img className="lo-avatar" src={r.avatar} alt={r.customer} />
              <div className="lo-product">{r.product}</div>
            </div>

            <span className={`lo-badge lo-badge--${r.badgeType}`}>
              {r.badgeText}
            </span>

            <div className="lo-price">{r.price}</div>
            <div className="lo-date">{r.date}</div>

            <button className="lo-edit" type="button">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
