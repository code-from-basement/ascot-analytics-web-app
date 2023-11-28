import Styles from "./ChartContainer.module.css";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

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
      </div>
      <Outlet />
    </div>
  );
}

export default ChartContainer;
