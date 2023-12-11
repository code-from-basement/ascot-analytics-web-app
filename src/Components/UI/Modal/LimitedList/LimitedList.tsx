import React from "react";
import Styles from "./LimitedList.module.css";
import Button from "../../Buttons/Buttons";
import { CloseRoundedIcon } from "../../Icons/IconsLibrary";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function LimitedList() {
  const { setLimitedListShow } = useGlobalContext();
  const closeTheLimitedListModal = () => {
    setLimitedListShow(false);
  };

  return (
    <div className={Styles.limitedList}>
      <div className={Styles.limitedList__container}>
        <div className={Styles.container__header}>
          <h3>Limitation list</h3>
          <button onClick={closeTheLimitedListModal}>
            <CloseRoundedIcon />
          </button>
        </div>
        <div className={Styles.container__body}>
          <p>You are reach to limitation of list, you can continue adding new item after deleting at least a added item.</p>
        </div>
        <div className={Styles.container__footer}>
          <Button onClick={closeTheLimitedListModal} type="btn-primary">
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LimitedList;
