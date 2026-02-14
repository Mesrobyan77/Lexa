import MiniBarChart from "../../../assets/icons";
import "./StateInformation.css";

export default function StateInformation() {
  return (
    <div className="state-information">
      <div className="state-graph">
        <MiniBarChart />
        <div className="info">Balance $ 2,317</div>
      </div>

      <div className="state-graph">
        <MiniBarChart color="rgb(122, 111, 190)" />

        <div className="info">Item Sold 1230</div>
      </div>
    </div>
  );
}
