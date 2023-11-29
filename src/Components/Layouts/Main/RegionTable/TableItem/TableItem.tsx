import Styles from "./TableItem.module.css";
import React, { useEffect } from "react";
import ColorTag from "./ColorTag/ColorTag";
import { DeleteRoundedIcon } from "../../../../UI/Icons/IconsLibrary";

import QolBar from "./QolBar/QolBar";
import { useGlobalContext } from "../../../../../Context/GlobalContext";

function TableItem({ id }) {
  const { listItem, setListItem, setLimitationListItemError, lengthOfListItem } = useGlobalContext();

  const onClickItemDeleteHandler = (id: number) => {
    setListItem(listItem.filter((item) => item.id !== id));
    //
    if (lengthOfListItem <= 4) {
      setLimitationListItemError(false);
    }
    //
  };

  return (
    <div className={Styles.tableItem}>
      <ColorTag />
      {/* <p className={Styles.tableItem__title}>&nbsp;</p> */}
      <p className={Styles.tableItem__country}>Country</p>
      <p className={Styles.tableItem__region}>region</p>
      <p className={Styles.tableItem__municipality}>Municipality</p>
      <div className={Styles.tableItem__qofBar}>
        <QolBar />
      </div>
      <p className={Styles.tableItem__ageGroup}>Age group</p>
      <p className={Styles.tableItem__gender}>Gender</p>
      <p className={Styles.tableItem__livingSituation}>Living Situation</p>
      <p className={Styles.tableItem__assistance}>Assistance</p>
      <button className={Styles.tableItem__remove} onClick={() => onClickItemDeleteHandler(id)}>
        <DeleteRoundedIcon />
      </button>
    </div>
  );
}

export default TableItem;
