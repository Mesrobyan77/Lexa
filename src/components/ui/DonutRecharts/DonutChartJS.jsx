import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = (title, value, titleSize, valueSize, color) => ({
  id: "centerText",
  afterDraw(chart) {
    const { ctx } = chart;
    const meta = chart.getDatasetMeta(0);

    if (!meta?.data?.length) return;

    const x = meta.data[0].x;
    const y = meta.data[0].y;

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = color;
    ctx.font = `400 ${titleSize}px Poppins, sans-serif`;
    ctx.fillText(title, x, y - titleSize / 1.5);

    ctx.fillStyle = color;
    ctx.font = `400 ${valueSize}px Poppins, sans-serif`;
    ctx.fillText(value, x, y + valueSize / 2);

    ctx.restore();
  },
});

export default function DonutRecharts({
  title = "Sales",
  centerValue = "30",
  titleSize = 13,
  valueSize = 26,
  data = [
    { name: "Download Sales", value: 12, color: "#6b7280" },
    { name: "In-Store Sales", value: 30, color: "#7a6fbe" },
    { name: "Mail-Order Sales", value: 20, color: "#2c6072" },
  ],
  height = 300,
}) {
  const [dynamicColor, setDynamicColor] = useState("#d7d5ec");

  useEffect(() => {
    const getThemeColor = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue("--card-title")
        .trim();
      if (color) setDynamicColor(color);
    };
    getThemeColor();
    const observer = new MutationObserver(getThemeColor);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const total = data.reduce((s, x) => s + x.value, 0);

  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        data: data.map((d) => d.value),
        backgroundColor: data.map((d) => d.color),
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: dynamicColor,
          boxWidth: 14,
          boxHeight: 14,
          padding: 20,
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
      tooltip: {
        backgroundColor: "#293142",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        displayColors: true,
        callbacks: {
          label: (ctx) => {
            const v = ctx.parsed;
            const pct = ((v / total) * 100).toFixed(1);
            return ` ${ctx.label}: ${pct}%`;
          },
        },
      },
    },
  };

  return (
    <div style={{ height, position: "relative" }}>
      <Doughnut
        data={chartData}
        options={options}
        plugins={[
          centerTextPlugin(
            title,
            centerValue,
            titleSize,
            valueSize,
            dynamicColor,
          ),
        ]}
      />
    </div>
  );
}
