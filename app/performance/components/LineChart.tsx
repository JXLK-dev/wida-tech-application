import React from "react";
import { Line } from "react-chartjs-2";
export function LineChart() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const scaleOpts = {
    grid: {
      borderColor: Utils.randomColor(1),
      color: "rgba( 0, 0, 0, 0.1)",
    },
    title: {
      display: true,
      text: (ctx) => ctx.scale.axis + " axis",
    },
  };
  const scales = {
    x: {
      type: "category",
    },
    y: {
      type: "linear",
      ticks: {
        callback: (val, index, ticks) =>
          index === 0 || index === ticks.length - 1 ? null : val,
      },
    },
  };
  Object.keys(scales).forEach((scale) =>
    Object.assign(scales[scale], scaleOpts)
  );
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={data}
        options={{
          scales = scales,
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
