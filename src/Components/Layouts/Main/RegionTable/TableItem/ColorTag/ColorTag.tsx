import { useGlobalContext } from "../../../../../../Context/GlobalContext";
import Styles from "./ColorTag.module.css";
import react from "react";

function ColorTag() {
  const context = useGlobalContext();
  const { colors } :any = context;

  const randomNum = Math.floor(Math.random() * 4);

  return (
    <div style={{ backgroundColor: `${colors[randomNum]}` }} className={Styles.colorTag}>
      &nbsp;
    </div>
  );
}

export default ColorTag;
