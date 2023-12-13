import React, { useEffect, useState } from "react";
import Styles from "./BarChart.module.css";
import Chart from "react-apexcharts";

import { useGlobalContext } from "../../../../../Context/GlobalContext";
import { HelpOutlineRoundedIcon } from "../../../../UI/Icons/IconsLibrary";

function BarChart() {
  const [questionListShow, setQuestionListShow] = useState<boolean>(false);
  const { barChartData, isLoading }: any = useGlobalContext();
  const barChartOptions = {
    colors: ["#4895ef", "#ef476f", "#16d5bc", "#6337f3"],
    xaxis: {
      // categories: ["how was the assistance".charAt(0).toUpperCase(),
      categories: ["Control of Life", "Mental Health", "Social Contact", "Home Cleanliness", "Personal Freedom", "Felling of Safety", "Food and Drink", "Personal Cleanliness"],
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

  return (
    <div className={Styles.barChart}>
      <button onClick={() => setQuestionListShow(!questionListShow)} className={Styles.questionLists}>
        Question List
        <HelpOutlineRoundedIcon />
      </button>
      {questionListShow && (
        <div className={Styles.questionListsContainer}>
          <ul>
            <li>1.Which of the following statements best describes how clean and comfortable your home is?</li>
            <li>2. Which of the following statements best describes how clean and comfortable your home is?</li>
            <li>3. Which of the following statements best describes how clean and comfortable your home is?</li>
            <li>4. Which of the following statements best describes how clean and comfortable your home is?</li>
            <li>5. Which of the following statements best describes how clean and comfortable your home is?</li>
            <li>6. Which of the following statements best describes how clean and comfortable your home is?</li>
            <li>7. Which of the following statements best describes how clean and comfortable your home is?</li>
            <li>8. Which of the following statements best describes how clean and comfortable your home is?</li>
          </ul>
        </div>
      )}
      {!isLoading && <Chart options={barChartOptions} series={barChartData} type="bar" width="100%" height={320} />}
    </div>
  );
}
export default BarChart;
