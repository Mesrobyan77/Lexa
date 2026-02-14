import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function StackedBarDiagram({ data }) {
  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: "Marketplace",
        data: data.map((d) => d.a),
        backgroundColor: "#29bbe3",
        borderRadius: 2,
        barThickness: 12,
      },
      {
        label: "Total Income",
        data: data.map((d) => d.b),
        backgroundColor: "#b9babc",
        borderRadius: 2,
        barThickness: 12,
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
        backgroundColor: "#2a3142",
        titleFont: { family: "Poppins" },
        bodyFont: { family: "Poppins" },
        displayColors: true,
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "rgba(206, 212, 218, 0.5)",
          font: { family: "Poppins", size: 11 },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: "rgba(206, 212, 218, 0.5)",
          font: { family: "Poppins", size: 11 },
          stepSize: 60,
        },
        grid: {
          color: "rgba(206, 212, 218, 0.1)",
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div style={{ height: 260 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
