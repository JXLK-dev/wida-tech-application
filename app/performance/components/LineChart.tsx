import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
import { DataComponent } from "../../components/function/DataJson";
import { CategoryScale } from "chart.js";
import { ViewButton } from "./ViewButton";
export const LineChart: React.FC = (props) => {
  Chart.register(zoomPlugin);
  Chart.register(CategoryScale);

  const [data, setData] = useState([]);
  const [jsonData, setJsonData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  const sumRevenueDaily = (json) => {
    return json.reduce((acc, item) => {
      const date = new Date(item.invoice_date);
      const day = date.toLocaleDateString();
      acc[day] = (acc[day] || 0) + item.Revenue;
      return acc;
    }, {});
  };

  const sumRevenueWeekly = (json) => {
    return json.reduce((acc, item) => {
      const date = new Date(item.invoice_date);
      const week = getWeekNumber(date);
      acc[week] = (acc[week] || 0) + item.Revenue;
      return acc;
    }, {});
  };

  const sumRevenueMonthly = (json) => {
    return json.reduce((acc, item) => {
      const date = new Date(item.invoice_date);
      const month = date.toLocaleString("default", { month: "long" });
      acc[month] = (acc[month] || 0) + item.Revenue;
      return acc;
    }, {});
  };

  useEffect(() => {
    // Fetch data from the database or API
    const fetchData = async () => {
      const json = await DataComponent.getData(
        "http://localhost:3000/api/get-sales-performance"
      );
      setLabels(Object.keys(sumRevenueDaily(json.result)));
      setData(Object.values(sumRevenueDaily(json.result)));
      setJsonData(json.result);
    };
    fetchData();
  }, []);

  function getWeekNumber(date) {
    const onejan = new Date(date.getFullYear(), 0, 1);
    const millisecsInDay = 86400000;
    return Math.ceil(
      ((date - onejan) / millisecsInDay + onejan.getDay() + 1) / 7
    );
  }
  return (
    <div className="chart-container">
      <h2 className="text-white text-center text-4xl mb-4">Line Chart</h2>
      <Line
        className="text-white bg-white rounded-lg mb-4 p-4"
        data={{
          labels: labels,
          datasets: [
            {
              label: "My First Dataset",
              data: data,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Sales Revenue Performance",
            },
            legend: {
              display: false,
            },
            zoom: {
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true,
                },
                mode: "xy",
              },
              pan: {
                enabled: true,
                mode: "xy",
              },
            },
          },
        }}
      />
      <ViewButton
        daily={sumRevenueDaily}
        weekly={sumRevenueWeekly}
        monthly={sumRevenueMonthly}
        json={jsonData}
        setLabels={setLabels}
        setData={setData}
      />
    </div>
  );
};
