import Styles from "./Main.module.css";
import React from "react";
import RegionTable from "./RegionTable/RegionTable";
import ChartContainer from "./ChartContainer/ChartContainer";

function Main() {
  return (
    <div className={Styles.main}>
      <RegionTable />
      <ChartContainer />
    </div>
  );
}

export default Main;
