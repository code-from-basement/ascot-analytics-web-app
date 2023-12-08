import Styles from "./Application.module.css";
import React from "react";
import Header from "../../Layouts/Header/Header";
import Main from "../../Layouts/Main/Main";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import ContactSupport from "../../UI/Contact Support/ContactSupport";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { SnackbarAlert } from "./../../UI/Snackbar/SnackbarAlert";

function Application() {
  const { showContact, openSnackBar, snackBarSuccess }: any = useGlobalContext();

  return (
    <div className={Styles.application}>
      {showContact && <ContactSupport />}
      {openSnackBar && <SnackbarAlert autoHideDuration={2000} severity={snackBarSuccess ? "info" : "error"} message={snackBarSuccess ? "Item successfully have added" : "The item has been deleted "} />}
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}

export default Application;
