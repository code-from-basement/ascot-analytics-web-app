import Styles from "./Application.module.css";
import React from "react";
import Header from "../../Layouts/Header/Header";
import Main from "../../Layouts/Main/Main";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import ContactSupport from "../../UI/Contact Support/ContactSupport";
import { useGlobalContext } from "../../../Context/GlobalContext";
import toast, { Toaster } from "react-hot-toast";
import LimitedList from "../../UI/Modal/LimitedList/LimitedList";

function Application() {
  const { showContact, notifyStatus, limitedListShow }: any = useGlobalContext();

  /**Style for notification (deleting and adding) */
  const notifyStyles = {
    height: "7rem",
    border: `${notifyStatus === "success" ? "1px solid #52c41a" : "1px solid #ff2e2e"}`,
    color: `${notifyStatus === "success" ? "#52c41a" : "#ff2e2e"}`,
    fontSize: "14px",
    backgroundColor: `${notifyStatus === "success" ? "#f3fff5" : "#fff0f0"}`,
  };

  return (
    <div className={Styles.application}>
      {showContact && <ContactSupport />}
      {limitedListShow && <LimitedList />}
      <Toaster toastOptions={{ style: notifyStyles }} position="bottom-right" />
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}

export default Application;
