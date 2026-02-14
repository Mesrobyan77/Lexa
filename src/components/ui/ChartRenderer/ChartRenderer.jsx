import AreaDiagram from "../AreaDiagram/AreaDiagram";
import DonutRecharts from "../DonutRecharts/DonutChartJS";
import StackedBarDiagram from "../StackedBarDiagram/StackedBarDiagram";

export default function ChartRenderer({ chart }) {
  if (!chart) return null;

  if (chart.type === "donut") {
    return (
      <DonutRecharts
        title={chart.title}
        centerValue={chart.centerValue}
        data={chart.data}
      />
    );
  }

  if (chart.type === "area") {
    return <AreaDiagram data={chart.data} />;
  }

  if (chart.type === "bar") {
    return <StackedBarDiagram data={chart.data} />;
  }

  return null;
}
