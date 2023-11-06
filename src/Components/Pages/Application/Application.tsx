import Styles from "./Application.module.css";
import React from "react";
import Header from "../../Layouts/Header/Header";
import Main from "../../Layouts/Main/Main";
import Sidebar from "../../Layouts/Sidebar/Sidebar";

function Application() {
  return (
    <div className={Styles.application}>
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}

export default Application;
