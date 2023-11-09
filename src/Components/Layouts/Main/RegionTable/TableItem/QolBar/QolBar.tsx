import Styles from "./QolBar.module.css";
import React from "react";

function QolBar() {
  return (
    <div className={Styles.bar}>
      <div className={Styles.bar__filler}>&nbsp;</div>
      <h5 className={Styles.bar__percentage}>50%</h5>
    </div>
  );
}

export default QolBar;
