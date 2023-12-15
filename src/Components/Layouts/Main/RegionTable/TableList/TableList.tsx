import React, { useEffect } from "react";
import Styles from "./TableList.module.css";
import TableItem from "../TableItem/TableItem";
import { useGlobalContext } from "../../../../../Context/GlobalContext";

function TableList() {
  const { listItem, limitationListItemError, setShowContainerLayout }: any = useGlobalContext();

  useEffect(() => {
    const listItemLength = listItem.length;
    if (listItemLength === 0) {
      setShowContainerLayout(true);
    } else setShowContainerLayout(false);
  }, [listItem, setShowContainerLayout]);

  return (
    <div className={Styles.tableList}>
      {listItem &&
        listItem.map((item: any, index: number) => (
          <TableItem
            index={index}
            key={item.id}
            item={item}
            id={item.id}
            country={item.data.info.country.charAt(0).toUpperCase() + item.data.info.country.replaceAll("_", " ").slice(1)}
            region={item.data.info.region.charAt(0).toUpperCase() + item.data.info.region.replaceAll("_", " ").slice(1)}
            municipality={item.data.info.municipality.charAt(0).toUpperCase() + item.data.info.municipality.replaceAll("_", " ").slice(1)}
            ageGroup={item.data.info.ageGroup}
            gender={item.data.info.gender.charAt(0).toUpperCase() + item.data.info.gender.replaceAll("_", " ").slice(1)}
            livingSituation={item.data.info.livingSituation.charAt(0).toUpperCase() + item.data.info.livingSituation.replaceAll("_", " ").slice(1)}
            assistance={item.data.info.assistance.charAt(0).toUpperCase() + item.data.info.assistance.replaceAll("_", " ").slice(1)}
            qolAvg={item.data.qolAvg}
            numberOfReports={item.data.numberOfReports}

          />
        ))}
      {/* {limitationListItemError && <h1>error</h1>} */}
    </div>
  );
}

export default TableList;
