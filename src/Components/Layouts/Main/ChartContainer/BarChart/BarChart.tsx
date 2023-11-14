import React from "react";
import Styles from "./BarChart.module.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart() {
  const data = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"],
    datasets: [
      {
        label: "Malmo",
        data: [0.5, 0.67, 0.89, 0.37, 0.83, 0.53, 0.72, 0.55],
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "black",
      },
      {
        label: "Lund",
        data: [0.53, 0.72, 0.5, 0.67, 0.5, 0.67, 0.89, 0.37],
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "black",
      },
      {
        label: "Eslov",
        data: [0.37, 0.83, 0.53, 0.72, 0.5, 0.67, 0.89, 0.9],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "black",
      },
    ],
  };

  const options = {
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //     ticks: {
    //       stepSize: 1,
    //       fontColor: "#ff0000"
    //     }
    //   }
    // },
    // plugins: {
    //   legend: {
    //     labels: {
    //       fontColor: "#ff0000"
    //     }
    //   }
    // }
  };

  return (
    <div className={Styles.barChart}>
      <div className={Styles.title}>
        <h2>Total of Quality</h2>
      </div>
      <Bar className={Styles.chart} data={data} options={options} />
    </div>
  );
}

export default BarChart;
