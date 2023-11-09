import React from "react";
import Styles from "./TableList.module.css";
import TableItem from "../TableItem/TableItem";

function TableList() {
  return (
    <div className={Styles.tableList}>
      <TableItem />
      <TableItem />
      <TableItem />
    </div>
  );
}

export default TableList;
