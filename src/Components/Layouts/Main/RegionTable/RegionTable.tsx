import Styles from "./Region.module.css";
import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableList from "./TableList/TableList";
import { useGlobalContext } from "../../../../Context/GlobalContext";
import { Empty } from "antd";

const LayoutContainer = () => {
  return (
    <div className={Styles.layoutContainer}>
      <Empty description=""/>
      <h2>Right now the table list is empty</h2>
      <h2>Please, add new municipality to the list.</h2>
    </div>
  );
};

function RegionTable() {
  const { showContainerLayout, setShowContainerLayout } = useGlobalContext();
  return (
    <div className={Styles.regionTable}>
      {showContainerLayout && <LayoutContainer />}
      <TableHeader />
      <TableList />
    </div>
  );
}

export default RegionTable;
