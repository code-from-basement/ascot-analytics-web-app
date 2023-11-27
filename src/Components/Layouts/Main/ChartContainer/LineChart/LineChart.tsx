import React, { useState } from "react";
import Styles from "./LineChart.module.css";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

function LineChart() {
  const [state, setState] = useState({
    options: {
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

    series: [
      {
        name: "series-1",
        data: [0.2, 0.3, 0.5, 0.23, 0.9, 0.1, 0.9, 0.1],
      },
      {
        name: "series-2",
        data: [0.11, 0.2, 0.5, 0.4, 0.2, 0.87, 0.87, 0.21],
      },
      {
        name: "series-2",
        data: [0.81, 0.8, 0.25, 0.22, 0.21, 0.2, 0.77, 0.41],
      },
    ],
  });

  return (
    <div className={Styles.lineChart}>
      <Chart options={state.options} series={state.series} width={1500} height={320} type="bar" />
    </div>
  );
}

export default LineChart;
