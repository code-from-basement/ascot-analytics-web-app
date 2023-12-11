import React, { useEffect, useState } from "react";
import Styles from "./BarChart.module.css";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useGlobalContext } from "../../../../../Context/GlobalContext";

function BarChart() {
  const { barChartData, isLoading }: any = useGlobalContext();
  const barChartOptions = {
    colors: ["#4895ef", "#ef476f", "#16d5bc", "#744df5"],
    xaxis: {
      categories: ["how was the assistance".charAt(0).toUpperCase(),
       "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"],
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
      min: 0,
      max: 1,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      Pattern: {
        strokeWidth: 200,
      },
    },
    tooltip: {
      style: {
        fontSize: "1.4rem",
      },
    
    },
  //   plotOptions: {
  //   bar:{
  //     columnWidth: "40rem",
  //     endingShape: "rounded",
  //     startingShape: "rounded",
  //   }
  // }
  };

  // const [state, setState] = useState({
  // options: {
  // states: {
  // normal: {
  //   filter: {
  //     type: "none",
  //     value: 0,
  //   },
  // },
  // hover: {
  //   filter: {
  //     type: "none",
  //     value: 0.01,
  //   },
  // },
  // active: {
  //   allowMultipleDataPointsSelection: false,
  //   filter: {
  //     type: "none",
  //     value: 0.15,
  //   },
  // },
  // },
  // dataLabels: {
  //   enabled: false,
  // },
  // fill: {
  //   type: "gradient",
  //   gradient: {
  //     shade: "light",
  //     type: "vertical",
  //     shadeIntensity: 0.25,
  //     gradientToColors: undefined,
  //     inverseColors: true,
  //     opacityFrom: 0.8,
  //     opacityTo: 1,
  //     stops: [0, 70, 100],
  //   },
  // },
  // yaxis: {
  //   title: {
  //     text: "Quality of Life",
  //     offsetX: -5,
  //     style: {
  // color: "#222224",
  //       fontSize: "1.4rem",
  //       fontWeight: 600,
  //     },
  //   },
  //   tooltip: {
  //     enabled: false,
  //     offsetX: 0,
  //   },
  //   min: 0,
  //   max: 1,
  // },
  // },
  // });

  return <div>{!isLoading && <Chart options={barChartOptions} series={barChartData} type="bar" width="100%" height={320} />}</div>;
}
export default BarChart;
