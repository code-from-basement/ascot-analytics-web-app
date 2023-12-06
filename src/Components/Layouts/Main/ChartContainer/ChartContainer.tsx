import Styles from "./ChartContainer.module.css";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ErrorOutlineOutlinedIcon } from "../../../UI/Icons/IconsLibrary";
import { useGlobalContext } from "../../../../Context/GlobalContext";
//
const LayoutContainer = () => {
  return (
    <div className={Styles.layoutContainer}>
      <ErrorOutlineOutlinedIcon />
      <h2>Right now the charts are empty</h2>
      <h2>Please, add new municipality to the chart</h2>
    </div>
  );
};
//

function ChartContainer() {
  const { showContainerLayout, setShowContainerLayout } = useGlobalContext();
  return (
    <div className={Styles.chartContainer}>
      {showContainerLayout && <LayoutContainer />}
      <nav className={Styles.chartNavbar}>
        <h2>Information chart</h2>
        <NavLink to="/application/barchart" className={({ isActive, isPending }) => (isPending ? Styles.pending : isActive ? Styles.active : "")}>
          Bar Chart
        </NavLink>
        <NavLink to="/application/linechart" className={({ isActive, isPending }) => (isPending ? Styles.pending : isActive ? Styles.active : "")}>
          Line Chart
        </NavLink>
      </nav>
      <div className={Styles.dividedLine}>
        <hr />
      </div>
      <Outlet />
    </div>
  );
}

export default ChartContainer;
