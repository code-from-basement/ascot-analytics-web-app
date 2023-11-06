import Styles from "./Header.module.css";
import React from "react";
import { AccountCircleOutlinedIcon, AccountCircleRoundedIcon } from "../../UI/Icons/IconsLibrary";
import {useGlobalContext} from "../../../Context/GlobalContext";

interface Props{
    dateGen:string;
}

function Header() {
  const { dateGen}: any = useGlobalContext() as Props;

  return (
  <div className={Styles.header}>
    <div className={Styles.column}>
        <div className={Styles.title}>
            <h1>ASC<span>O</span>T</h1>
            <p>Adult social care outcomes toolkit</p>
        </div>
        {/* <div className={Styles.date}>
            {dateGen}
        </div> */}
    </div>
    <div className={Styles.column}>
        <div className={Styles.userName}><AccountCircleOutlinedIcon/>Pernilla Bell</div>
        <div className={Styles.email}>pernilla.bell@gmail.com</div>
    </div>
    
    </div>
    );
}

export default Header;
