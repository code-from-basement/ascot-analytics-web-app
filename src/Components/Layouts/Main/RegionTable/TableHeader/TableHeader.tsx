import Styles from "./TableHeader.module.css";
import React from "react";

function TableHeader() {
  return (
    <div className={Styles.tableHeader}>
      <h2 className={Styles.header__title}>Municipality List</h2>
      <h3 className={Styles.header__country}>Country</h3>
      <h3 className={Styles.header__region}>Region</h3>
      <h3 className={Styles.header__municipality}>Municipality</h3>
      <h3 className={Styles.header__qofBar}>Quality of Life</h3>
      <h3 className={Styles.header__remove}>Remove</h3>
    </div>
  );
}

export default TableHeader;
