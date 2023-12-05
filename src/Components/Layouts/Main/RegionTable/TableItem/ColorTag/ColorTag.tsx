import { useGlobalContext } from "../../../../../../Context/GlobalContext";
import Styles from "./ColorTag.module.css";
import react, { useCallback, useEffect, useState } from "react";

function ColorTag({ index }: any) {
  const { colors } = useGlobalContext();

  const detail = {
    error: {
      message: "",
      type: "error",
    },
    success: {
      message: "",
      type: "success",
    },
  };

  return (
    <div style={{ backgroundColor: `${colors[index]}` }} className={Styles.colorTag}>
      &nbsp;
    </div>
  );
}

export default ColorTag;
