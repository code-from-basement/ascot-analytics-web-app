import React, { useEffect, useState } from "react";
import Styles from "./BarChart.module.css";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useGlobalContext } from "../../../../../Context/GlobalContext";

function BarChart() {
  const { barChartData } = useGlobalContext();

  const [state, setState] = useState({
    options: {
      colors: ["#4895ef", "#ef476f", "#16d5bc", "#744df5"],
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0.01,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0.15,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      // noData: {
      //   text: "",
      //   align: "center",
      //   verticalAlign: "middle",
      //   offsetX: 0,
      //   offsetY: 0,
      //   style: {
      //     color: "#ff0000",
      //     fontSize: "20px",
      //     fontFamily: undefined,
      //   },
      // },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.8,
          opacityTo: 1,
          stops: [0, 70, 100],
        },
      },
      chart: {
        id: "basic-bar",
        background: "transparent",
      },

      xaxis: {
        labels: {
          rotate: 45,
        },
        categories: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"],
      },
      yaxis: {
        title: {
          text: "Quality of Life",
          offsetX: -5,

          style: {
            color: "#222224",
            fontSize: "1.4rem",
            fontWeight: 600,
          },
        },
        tooltip: {
          enabled: false,
          offsetX: 0,
        },

        min: 0,
        max: 1,
      },
    },

    // series: [],
  });

  return (
    <div className={Styles.barChart}>
      <div className={Styles.title}>Total Quality of life</div>
      <Chart options={state.options} series={barChartData} width={1500} height={320} type="bar" />
    </div>
  );
}

export default BarChart;
