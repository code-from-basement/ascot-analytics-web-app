import Styles from "./QolBar.module.css";
import React from "react";

function QolBar({ qolAvg }: any) {
  const calcFilterBarLength = qolAvg * 100;
  console.log(calcFilterBarLength);
  return (
    <div className={Styles.bar}>
      <div className={Styles.bar__filler} style={{ width: `${calcFilterBarLength}%` }}>
        &nbsp;
      </div>
      <h5 className={Styles.bar__percentage}>{qolAvg}</h5>
    </div>
  );
}

export default QolBar;
