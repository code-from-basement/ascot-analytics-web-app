import Styles from "./TableItem.module.css";
import React, { useEffect } from "react";
import ColorTag from "./ColorTag/ColorTag";
import { DeleteRoundedIcon } from "../../../../UI/Icons/IconsLibrary";

import QolBar from "./QolBar/QolBar";
import { useGlobalContext } from "../../../../../Context/GlobalContext";

function TableItem({ id, country, region, municipality, ageGroup, gender, livingSituation, assistance, qolAvg, index }: any) {
  const { listItem, setListItem, setLimitationListItemError, lengthOfListItem, notifyDeleteItem }: any = useGlobalContext();

  /**deleting item from list logic */
  const onClickItemDeleteHandler = (id: number) => {
    setListItem(listItem.filter((item: any) => item.id !== id));

    notifyDeleteItem("Item Successfully Deleted from the list.");
    //
    if (lengthOfListItem <= 4) {
      setLimitationListItemError(false);
    }
    //
  };

  console.log("this is  the key", index);

  return (
    <div className={Styles.tableItem}>
      <ColorTag index={index} />
      {/* <p className={Styles.tableItem__title}>&nbsp;</p> */}
      <p className={Styles.tableItem__country}>{country}</p>
      <p className={Styles.tableItem__region}>{region}</p>
      <p className={Styles.tableItem__municipality}>{municipality}</p>
      <div className={Styles.tableItem__qofBar}>
        <QolBar qolAvg={qolAvg} />
      </div>
      <p className={Styles.tableItem__ageGroup}>{ageGroup ? ageGroup : "-"}</p>
      <p className={Styles.tableItem__gender}>{gender ? gender : "-"}</p>
      <p className={Styles.tableItem__livingSituation}>{livingSituation ? livingSituation : "-"}</p>
      <p className={Styles.tableItem__assistance}>{assistance ? assistance : "-"}</p>
      <button className={Styles.tableItem__remove} onClick={() => onClickItemDeleteHandler(id)}>
        <DeleteRoundedIcon />
      </button>
    </div>
  );
}

export default TableItem;
