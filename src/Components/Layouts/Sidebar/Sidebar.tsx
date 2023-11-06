import Styles from "./Sidebar.module.css";
import React from "react";
import logoImage from "./../../../assets/Image/hestiaAgora-logo.png";
import Button from "../../UI/Buttons/Buttons";
import { HeadsetMicRoundedIcon } from "./../../UI/Icons/IconsLibrary";
import { FormControl, FormLabel, Select } from "@mui/material";
import SidebarForm from "./SidebarForm/SidebarForm";

function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.row}>
        <img className={Styles.logoImage} src={logoImage} alt="hestia agora brand logo image" />
      </div>
      <div className={Styles.row}>
        <SidebarForm />
      </div>
      <div className={Styles.row}>
        <Button type="btn-outline">
          <HeadsetMicRoundedIcon />
          Contact Support
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
