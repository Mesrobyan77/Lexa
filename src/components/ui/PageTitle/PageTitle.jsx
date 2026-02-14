import { Link } from "react-router-dom";
import "./PageTitle.css";
import StateInformation from "../StateInformation/StateInformation";
import TopNav from "../TopNav/TopNav";

export default function PageTitle() {
  return (
    <div className="pt-wrapper">
      <div className="pt-container">
        <div className="pt-inner">
          <div className="pt-row">
            <div className="pt-left">
              <div className="pt-title-box">
                <h4>Dashboard</h4>

                <ol className="pt-breadcrumb">
                  <li className="pt-breadcrumb-item active">
                    <Link to="/dashboard">Lexa</Link>
                  </li>
                  <li className="pt-breadcrumb-item" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </div>
            </div>

            <div className="pt-right">
              <StateInformation />
            </div>
          </div>
        </div>

        <TopNav />
      </div>
    </div>
  );
}
