import Styles from "./Application.module.css";
import React, { useEffect, useState } from "react";
import Header from "../../Layouts/Header/Header";
import Main from "../../Layouts/Main/Main";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import ContactSupport from "../../UI/Contact Support/ContactSupport";
import { useGlobalContext } from "../../../Context/GlobalContext";
import toast, { Toaster } from "react-hot-toast";
import LimitedList from "../../UI/Modal/LimitedList/LimitedList";
import useIdle from "../../UI/useIdleTimer/useIdleTimer";
import {LoginRoundedIcon, LogoutIcon } from "../../UI/Icons/IconsLibrary";
import Button from "../../UI/Buttons/Buttons";

function Application() {
  const { showContact, notifyStatus, limitedListShow }: any = useGlobalContext();
  const { signInInfo }: any = useGlobalContext();
  const { info, signOutFunc } = signInInfo;

  /**************************************************** */
  /**Set TimeOut Session for Detecting Idle user */
  const [showModal, setShowModal] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const handleIdle = () => {
    setShowModal(true); //show modal
    setRemainingTime(30); //set 15 seconds as time remaining
  };

  const { isIdle } = useIdle({ onIdle: handleIdle, idleTime: 0.3});
  console.log("is user idle?", isIdle);

  useEffect(() => {
    let interval : any;
    if (isIdle && showModal) {
      interval = setInterval(() => {
        setRemainingTime(
          (prevRemainingTime) =>
            prevRemainingTime > 0 ? prevRemainingTime - 1 : 0 //reduces the second by 1
        );
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isIdle, showModal]);

  useEffect(() => {
    if (remainingTime === 0 && showModal) {
      // alert("Time out!");
      setShowModal(false);
      signOutFunc;
      localStorage.clear();
      window.location.href = "/login"
    }
  }, [remainingTime, showModal]); // this is responsoble for logging user out after timer is down to zero and they have not clicked anything

  const handleLogOut = () => {
    setShowModal(false);
    signOutFunc;
    localStorage.clear();
    window.location.href = "/login"
  };

  const handleStayLoggedIn = () => {
    setShowModal(false);
  };
  function millsToMinutesAndSeconds(mills : any) {
    var minutes = Math.floor(mills / 60000);
    var seconds : any = ((mills % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
/**************************************************** */


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
      {isIdle && showModal && (
        <div className={Styles.modal}>
          <div className={Styles.modalContent}>
            <h3>Session Timeout Warning</h3>
            <hr/>
            <p>You are about to be logged out due to inactivity.</p>
            <div className={Styles.timeRemaining}>
              <p>Time remaining: {millsToMinutesAndSeconds(remainingTime * 1000)}</p>
            </div>
            <div className={Styles.row}>
              <Button type="btn-outline" onClick={handleLogOut}>Logout<LogoutIcon /></Button>
              <Button type="btn-primary" onClick={handleStayLoggedIn}>Stay Login<LoginRoundedIcon /></Button>
            </div>
          </div>
        </div>

      )}
      <Toaster toastOptions={{ style: notifyStyles }} position="bottom-right" />
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}

export default Application;
