import React from "react";

import Styles from "./TableHeader.module.css";

function TableHeader() {
  return (
    <div className={Styles.tableHeader}>
      <h2>Municipality List</h2>
      <h3>Country</h3>
      <h3>Region</h3>
      <h3>Municipality</h3>
      <h3>Quality of Life</h3>
      <h3>Remove</h3>
    </div>
  );
}

export default TableHeader;
