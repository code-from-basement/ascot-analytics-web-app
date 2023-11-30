import React from "react";
import Styles from "./TableList.module.css";
import TableItem from "../TableItem/TableItem";
import { useGlobalContext } from "../../../../../Context/GlobalContext";

function TableList() {
  const { listItem, limitationListItemError } = useGlobalContext();
  return (
    <div className={Styles.tableList}>
      {listItem && listItem.map((item) => 
        <TableItem key={item.id} 
          item={item} 
          id={item.id} 
          country={item.data.info.country}
          region={item.data.info.region}
          municipality={item.data.info.municipality}
          ageGroup={item.data.info.age}
          gender={item.data.info.gender}
          livingSituation={item.data.info.livingSituation}
          assistance={item.data.info.assistance}
          qolAvg={item.data.qolAvg}
           />
      )}
      {limitationListItemError && <h1>error</h1>}
    </div>
  );
}

export default TableList;
