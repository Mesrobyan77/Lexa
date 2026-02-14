import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const textColor =
  getComputedStyle(document.documentElement)
    .getPropertyValue("--card-title")
    .trim() || "#ced4da";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export default function AreaDiagram({ data }) {
  const chartData = {
    labels: data.map((d) => d.year),
    datasets: [
      {
        label: "Series A",
        data: data.map((d) => d.a),
        fill: true,
        borderColor: "rgba(81, 82, 115, 0.4)",
        backgroundColor: "rgba(81, 82, 115, 0.4)",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "Series B",
        data: data.map((d) => d.b),
        fill: true,
        borderColor: "#3e6579",
        backgroundColor: "#3e6579",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "Series C",
        data: data.map((d) => d.c),
        fill: true,
        borderColor: "rgba(81, 82, 115, 0.4)",
        backgroundColor: "rgba(81, 82, 115, 0.4)",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColor,
          font: { family: "Poppins", size: 12 },
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColor,
          font: { family: "Poppins", size: 12 },
          stepSize: 90,
        },
        grid: {
          color: "rgba(206, 212, 218, 0.1)",
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div style={{ height: 260, padding: "10px" }}>
      <Line data={chartData} options={options} />
    </div>
  );
}
