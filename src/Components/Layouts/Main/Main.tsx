import Styles from "./Main.module.css";
import React from "react";
import RegionTable from "./RegionTable/RegionTable";
import ChartContainer from "./ChartContainer/ChartContainer";
import LoadingLayout from "../../UI/Loading Layout/LoadingLayout";
import { useGlobalContext } from "../../../Context/GlobalContext";

function Main() {
  const {isLoading} : any = useGlobalContext();
  return (
    <div className={Styles.main}>
      {isLoading && <LoadingLayout/>}
      <RegionTable />
      <ChartContainer />
    </div>
  );
}

export default Main;
