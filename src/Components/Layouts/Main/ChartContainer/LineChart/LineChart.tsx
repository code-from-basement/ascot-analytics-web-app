import React, { useState } from "react";
import Styles from "./LineChart.module.css";
import Chart from "react-apexcharts";
import { useGlobalContext } from "../../../../../Context/GlobalContext";

function LineChart() {
  
  const array = [0.3, 0.2, 0.1, 0.3];
  const { lineChartData, listItem, isLoading }: any = useGlobalContext();
  const seriesData = listItem.map((item:any) => {
    return { name: item.data.lineChart.name.charAt(0).toUpperCase() + item.data.lineChart.name.slice(1)
      , data: item.data.lineChart.data };
  });

  console.log(seriesData, "form line chart----------");
  const chartOptions = {
    // Define your chart options here
   colors:['#4895ef', '#ef476f', '#16d5bc', '#744df5'],
    xaxis: {
      categories: [2020, 2021, 2022, 2023],
      type: "year"
    },
    yaxis: {
      min:0,
      max:1,
      title:{
        text:"Quality of life",
        offsetX:-5,
        style:{
          color:"#222224",
          fontSize:"1.4rem",
          fontWeight:"600",
        }
      }
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
    tooltip:{
      style:{
        fontSize:"1.4rem",
      }
    }
  };

  return (
    <div>
      {!isLoading && 
      <Chart
        options={chartOptions}
        series={seriesData}
        type="line"
        height={320}
        width="100%"
      />}
    </div>
  );
};

export default LineChart;
