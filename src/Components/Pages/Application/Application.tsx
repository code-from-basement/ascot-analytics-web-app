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
  const notifyStyles = { color: "white", fontSize: "14px", backgroundColor: `${notifyStatus === "success" ? "#2a850e" : "#ba0c0c"}` };

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
