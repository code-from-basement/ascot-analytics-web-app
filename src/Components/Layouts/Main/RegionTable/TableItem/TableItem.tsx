import Styles from "./TableItem.module.css";
import ColorTag from "./ColorTag/ColorTag";
import { DeleteRoundedIcon } from "../../../../UI/Icons/IconsLibrary";

import React from "react";
import QolBar from "./QolBar/QolBar";

function TableItem() {
  return (
    <div className={Styles.tableItem}>
      <ColorTag />
      <p className={Styles.tableItem__title}>&nbsp;</p>
      <p className={Styles.tableItem__country}>Country</p>
      <p className={Styles.tableItem__region}>region</p>
      <p className={Styles.tableItem__municipality}>Municipality</p>
      <div className={Styles.tableItem__qofBar}>
        <QolBar />
      </div>
      <button className={Styles.tableItem__remove}>
        <DeleteRoundedIcon />
      </button>
    </div>
  );
}

export default TableItem;
