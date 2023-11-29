import React from "react";
import Styles from "./TableList.module.css";
import TableItem from "../TableItem/TableItem";
import { useGlobalContext } from "../../../../../Context/GlobalContext";

function TableList() {
  const { listItem, limitationListItemError } = useGlobalContext();
  return (
    <div className={Styles.tableList}>
      {listItem && listItem.map((item) => <TableItem key={item.id} item={item} id={item.id} />)}
      {limitationListItemError && <h1>error</h1>}
    </div>
  );
}

export default TableList;
