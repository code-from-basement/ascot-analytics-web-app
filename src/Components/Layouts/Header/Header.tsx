import Styles from "./Header.module.css";
import React from "react";
import { AccountCircleOutlinedIcon, LogoutIcon } from "../../UI/Icons/IconsLibrary";
import Button from "../../UI/Buttons/Buttons";

function Header() {

return (
<div className={Styles.header}>
    <div className={Styles.titleContainer}>
        <div className={Styles.title}>
            <h1>ASC<span>O</span>T</h1>
            <p>Adult social care outcomes toolkit</p>
        </div>
    </div>
    <div className={Styles.rightContainer}>
        <div className={Styles.userContainer}>
            <div className={Styles.userName}><AccountCircleOutlinedIcon/>Pernilla Bell</div>
            <div className={Styles.email}>pernilla.bell@gmail.com</div>
        </div>
        <div className={Styles.logoutContainer}>
            <Button type="btn-link" onClick={()=>{}}>Logout<LogoutIcon/></Button>

        </div>
    </div>
    
</div>
    );
}

export default Header;
