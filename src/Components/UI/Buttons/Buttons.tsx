import Styles from "./Button.module.css";
import React from "react";

interface buttonProps {
  children: React.ReactNode;
  type?: string;
}

function Button({ children, type }: buttonProps) {
  return <button className={`${Styles.button} ${Styles[`${type}`]}`}>{children}</button>;
}

export default Button;
