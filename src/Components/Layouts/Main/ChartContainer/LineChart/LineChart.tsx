import React, { useState } from "react";
import Styles from "./LineChart.module.css";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

function LineChart() {
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
      markers: {
        size: 5,
        colors: undefined,
        strokeColors: "transparent",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 1,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 2,
        },
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
        id: "basic-line",
        background: "transparent",
      },

      xaxis: {
        labels: {
          rotate: 45,
        },
        categories: [2020, 2021, 2022, 2023],
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
        name: "Malmö",
        data: [0.2, 0.43, 0.85, 0.23],
      },
      {
        name: "Lund",
        data: [0.11, 0.52, 0.75, 0.4],
      },
      {
        name: "Eslöv",
        data: [0.95, 0.8, 0.65, 0.32],
      },
    ],
  });

  return (
    <div className={Styles.lineChart}>
      <Chart options={state.options} series={state.series} width={1500} height={320} type="line" />
    </div>
  );
}

export default LineChart;
