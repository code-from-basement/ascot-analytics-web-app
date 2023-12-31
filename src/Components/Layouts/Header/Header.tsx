import Styles from "./Header.module.css";
import React, { useEffect, useState } from "react";
import { AccountCircleOutlinedIcon, LogoutIcon } from "../../UI/Icons/IconsLibrary";
import Button from "../../UI/Buttons/Buttons";
import { useGlobalContext } from "../../../Context/GlobalContext";

function Header() {
  const { signInInfo }: any = useGlobalContext();
  const { info, signOutFunc } = signInInfo;
  console.log(signInInfo);

  /**Set timeOut for SignOut the user */
  // useEffect(() => {
  //   setTimeout(() => {
  //     signOutFunc;
  //     localStorage.clear();
  //     window.location.href = "/login";
  //   }, 5000000);
  // }, []);

  const onClickSignOutHandler = () => {
    signOutFunc;
    localStorage.clear();
    window.location.href = "/login";
  };
  console.log(signInInfo, "sign in ifo from header");
  
  return (
    <div className={Styles.header}>
      <div className={Styles.titleContainer}>
        <div className={Styles.title}>
          <h1>
            ASC<span>O</span>T
          </h1>
          <p>Adult social care outcomes toolkit</p>
        </div>
      </div>
      <div className={Styles.rightContainer}>
        <div className={Styles.email}>
          <AccountCircleOutlinedIcon />
          {info?.signInDetails?.loginId}
        </div>
        <div className={Styles.logoutContainer}>
          <Button type="btn-link" onClick={onClickSignOutHandler}>
            Logout
            <LogoutIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
