import React, { useState } from "react";
import Styles from "./LineChart.module.css";
import Chart from "react-apexcharts";
import { useGlobalContext } from "../../../../../Context/GlobalContext";

function LineChart() {
  const { lineChartData, listItem, isLoading }: any = useGlobalContext();
  const rangeYearsOfData = [2020, 2021, 2022, 2023];

  // const newSeries = [
  //   { name: "malmo", data: { x: [2020, 2021, 2022, 2023], y: [0.1, 0.3, 0.2, 0.8] } },
  //   { name: "lund", data: { x: [2020, 2021, 2022, 2023], y: [null, null, 0.3, 0.6] } },
  // ];

  const seriesData = lineChartData?.map((item :any, num:number) => {
    const newY = Array(4).fill(null);
    const newArr = newY;
    for (let i = 0; i < rangeYearsOfData.length; i++) {
      if (item?.data.x.includes(rangeYearsOfData[i])) {
        const indexInX = item?.data.x.indexOf(rangeYearsOfData[i]);
        newY[i] = item?.data.y[indexInX];
      }
    }
    return {
      name: item.name,
      data: newArr,
    };
  });

  const chartOptions : any = {
    // Define your chart options here
    colors: ["#4895EF", "#EF476F", "#16D5BC", "#744DF5"],
    xaxis: {
      categories: [2020, 2021, 2022, 2023],
      type: "year",
    },
    yaxis: {
      min: 0,
      max: 1,
      title: {
        text: "Quality of life",
        offsetX: -5,
        style: {
          color: "#222224",
          fontSize: "1.4rem",
          fontWeight: "600",
        },
      },
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 6,
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
        sizeOffset: 3,
      },
    },
    tooltip: {
      style: {
        fontSize: "1.4rem",
      },
    },
  };

  // const seriesData = listItem.map((item: any) => {
  //   return { name: item.data.lineChart.name,
  //       data: item.data.lineChart.data };
  // });

  // console.log(seriesData, "form line chart----------");

  return <div className={Styles.lineChart}>{!isLoading && <Chart options={chartOptions} series={seriesData} type="line" height={320} width="100%" />}</div>;
}

export default LineChart;
