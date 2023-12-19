import Styles from "./Application.module.css";
import React from "react";
import Header from "../../Layouts/Header/Header";
import Main from "../../Layouts/Main/Main";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import ContactSupport from "../../UI/Contact Support/ContactSupport";
import { useGlobalContext } from "../../../Context/GlobalContext";
import toast, { Toaster } from "react-hot-toast";
import LimitedList from "../../UI/Modal/LimitedList/LimitedList";
import { withAuthenticator } from "@aws-amplify/ui-react";

function Application() {
  const { showContact, notifyStatus, limitedListShow }: any = useGlobalContext();

  /**Style for notification (deleting and adding) */
  const notifyStyles = {
    height: "7rem",
    color: "#fff",
    fontSize: "14px",
    backgroundColor: `${notifyStatus === "success" ? "#389e0d" : "#d00000"}`,
    boxShadow: "none",
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
