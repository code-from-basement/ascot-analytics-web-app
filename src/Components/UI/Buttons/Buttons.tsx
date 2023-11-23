import Styles from "./Button.module.css";
import React from "react";

interface buttonProps {
  children: React.ReactNode;
  type?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

function Button({ children, type, onClick }: buttonProps) {
  return (
    <button className={`${Styles.button} ${Styles[`${type}`]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
