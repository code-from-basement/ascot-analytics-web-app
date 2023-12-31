import Styles from "./TableItem.module.css";
import React, { useEffect } from "react";
import ColorTag from "./ColorTag/ColorTag";
import { DeleteRoundedIcon, RemoveRoundedIcon } from "../../../../UI/Icons/IconsLibrary";
import QolBar from "./QolBar/QolBar";
import { useGlobalContext } from "../../../../../Context/GlobalContext";
import { Badge, Progress, Space } from "antd";

function TableItem({ id, country, region, municipality, ageGroup, gender, livingSituation, assistance, qolAvg, numberOfReports, index }: any) {
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
        <Progress size={[200, 13]} className={Styles.progress} percent={qolAvg * 100} status="normal" format={() => qolAvg} strokeColor={{ from: "#108ee9", to: "#87d068" }} />
        {/* <QolBar qolAvg={qolAvg} /> */}
      </div>
      <p className={Styles.tableItem__ageGroup}>{ageGroup ? ageGroup : <RemoveRoundedIcon />}</p>
      <p className={Styles.tableItem__gender}>{gender ? gender : <RemoveRoundedIcon />}</p>
      <p className={Styles.tableItem__livingSituation}>{livingSituation ? livingSituation : <RemoveRoundedIcon />}</p>
      <p className={Styles.tableItem__assistance}>{assistance ? assistance : <RemoveRoundedIcon />}</p>
      <div className={Styles.tableItem__elderlyNum}>
        <Badge count={numberOfReports} showZero overflowCount={999999} color="#dfdfe0" />
      </div>
      <button className={Styles.tableItem__remove} onClick={() => onClickItemDeleteHandler(id)}>
        <DeleteRoundedIcon />
      </button>
    </div>
  );
}

export default TableItem;
