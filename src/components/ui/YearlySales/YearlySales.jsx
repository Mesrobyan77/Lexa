import "./YearlySales.css";
import Card from "../Card/Card";
import { ArrowUpRight } from "lucide-react";

export default function YearlySales() {
  return (
    <Card title="Yearly Sales">
      <div className="ds-sales">
        <div className="ds-sales-left">
          <h3 className="ds-sales-number">52,345</h3>
          <p className="ds-muted">The languages only differ grammar</p>
          <a className="ds-link" href="#">
            Learn more <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="ds-sales-right">
          <div className="ds-chart-placeholder ds-chart--small">Sparkline</div>
        </div>
      </div>
    </Card>
  );
}
