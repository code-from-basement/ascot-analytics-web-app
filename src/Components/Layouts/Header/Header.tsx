import Styles from "./Header.module.css";
import React from "react";
import { AccountCircleOutlinedIcon, LogoutIcon } from "../../UI/Icons/IconsLibrary";
import Button from "../../UI/Buttons/Buttons";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { signInInfo } = useGlobalContext();
  const { info, signOutFunc } = signInInfo;
  const navigate = useNavigate();

  const onClickSignOutHandler = () => {
    signOutFunc();
  };
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
        <div className={Styles.userContainer}>
          {/* <div className={Styles.userName}>Pernilla Bell</div> */}
          <div className={Styles.email}>
            <AccountCircleOutlinedIcon />
            {info?.signInDetails?.loginId}
          </div>
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
