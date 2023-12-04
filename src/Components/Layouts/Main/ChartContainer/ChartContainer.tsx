import Styles from "./ChartContainer.module.css";
import React , {useState} from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { SnackbarAlert } from "../../../UI/Snackbar/SnackbarAlert";

function ChartContainer() {
  return (
    <div className={Styles.chartContainer}>
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
          <SnackbarAlert severity="info" message="Select a chart type to view the information" />
      </div>
      <Outlet />
    </div>
  );
}

export default ChartContainer;
