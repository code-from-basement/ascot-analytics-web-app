import Styles from "./Login.module.css";
import hestiaLogo from "./../../../assets/Image/hestiaAgora-logo.png";
import { PasswordRoundedIcon, HelpOutlineRoundedIcon, LoginRoundedIcon } from "./../../UI/Icons/IconsLibrary";
import React from "react";

function Login() {
  return (
    <div className={Styles.login}>
      <section className={Styles.loginPanel}>
        <div className={Styles.content}>
          <div className={Styles.contentRow}>
            <img className={Styles.brandImage} src={hestiaLogo} alt="" />
          </div>

          <div className={Styles.contentRow}>
            <h1>
              Welcome, to <span>ASCOT</span> web application, developed by Hestia agora compony.
            </h1>
          </div>
          <div className={Styles.contentRow}>
            <h2>
              This platform empowers users to intimately engage with the wealth of data, facilitating in-depth analysis and understanding of elderly care and well-being across various locations. Explore a new dimension of elderly-centric
              analytics like never before.
            </h2>
          </div>
          <div className={Styles.contentRow}>
            <p>
              <HelpOutlineRoundedIcon />
              &nbsp;For more information check&nbsp;<a href="#">www.hestiaagora.com </a>
            </p>
          </div>
        </div>

        <form className={Styles.form}>
          <div className={Styles.formRow}>
            <PasswordRoundedIcon />
          </div>
          <div className={Styles.formRow}>
            <h2>Login with your username and passwrod:</h2>
          </div>

          <div className={Styles.formRow}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
          </div>

          <div className={Styles.formRow}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>

          <div className={Styles.formRow}>
            <button className={Styles.submitButton}>
              Submit <LoginRoundedIcon />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
