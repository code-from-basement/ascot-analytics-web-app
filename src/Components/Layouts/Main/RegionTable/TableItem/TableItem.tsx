import Styles from "./TableItem.module.css";
import ColorTag from "./ColorTag/ColorTag";
import React from "react";

function TableItem() {
  return (
    <div className={Styles.tableItem}>
      <ColorTag />
    </div>
  );
}

export default TableItem;
