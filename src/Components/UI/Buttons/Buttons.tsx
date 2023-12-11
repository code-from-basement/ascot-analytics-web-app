import Styles from "./Button.module.css";
import React from "react";

interface buttonProps {
  children: React.ReactNode;
  type?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled: boolean;
}

function Button({ children, type, disabled, onClick }: buttonProps) {
  return (
    <button disabled={disabled} className={`${Styles.button} ${Styles[`${type}`]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
