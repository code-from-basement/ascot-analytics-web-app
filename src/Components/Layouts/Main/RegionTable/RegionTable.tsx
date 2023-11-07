import Styles from "./Region.module.css";
import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableList from "./TableList/TableList";

function RegionTable() {
  return (
    <div className={Styles.regionTable}>
      <TableHeader />
      <TableList />
    </div>
  );
}

export default RegionTable;
