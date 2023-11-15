import Styles from "./Application.module.css";
import React from "react";
import Header from "../../Layouts/Header/Header";
import Main from "../../Layouts/Main/Main";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import ContactSupport from "../../UI/Contact Support/ContactSupport";
import { useGlobalContext } from "../../../Context/GlobalContext";

function Application() {
  const {showContact}:any = useGlobalContext();
 
  return (
    <div className={Styles.application}>
      {showContact && <ContactSupport/>}
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}

export default Application;
