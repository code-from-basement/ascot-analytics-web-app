import React from "react";
import Styles from "./BarChart.module.css";

function BarChart() {
  return (
    <div className={Styles.barChart}>
      <div className={Styles.title}>
        <h2>Total of Quality</h2>
      </div>
    </div>
  );
}

export default BarChart;
