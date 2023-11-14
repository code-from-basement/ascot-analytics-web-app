import Styles from "./Login.module.css";
import hestiaLogo from "./../../../assets/Image/hestiaAgora-logo.png";
import { PasswordRoundedIcon, HelpOutlineRoundedIcon, LoginRoundedIcon } from "./../../UI/Icons/IconsLibrary";
import React from "react";
import { useForm } from "react-hook-form";

/**Type Declaration */
type formValues = {
  username: string;
  password: string;
  message: string;
  id: string | undefined;
};

/**Form Validation data pattern-values-messages */
const formValidationData = {
  username: {
    value: true,
    emailReGexPattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    emailRequireMessage: "*Invalid Username, please try again",
  },
  password: {
    value: true,
    passwordRequireMessage: "*Invalid password, please try again",
  },
};

function Login() {
  const loginForm = useForm<formValues>(); //use useFrom from "React Hook Form"
  const { register, handleSubmit, formState } = loginForm; //destructure register & handle submit & formState from loginForm variable

  const { errors } = formState;

  /**Submit form handler function */
  const onSubmitHandler = (data: formValues) => {
    console.log(data);
  };

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

        <form className={Styles.form} onSubmit={handleSubmit(onSubmitHandler)} noValidate>
          <div className={Styles.formRow}>
            <PasswordRoundedIcon />
          </div>
          <div className={Styles.formRow}>
            <h2>Login with your username and password:</h2>
          </div>

          <div className={Styles.formRow}>
            <label htmlFor="username">Username:</label>
            <input
              placeholder="Please enter you email address"
              type="text"
              id="username"
              {...register("username", {
                required: {
                  value: formValidationData.username.value,
                  message: formValidationData.username.emailRequireMessage,
                },
              })}
            />
            <p className={Styles.inputControlErrorTextMessage}>{errors.username?.message} &nbsp;</p>
          </div>

          <div className={Styles.formRow}>
            <label htmlFor="password">Password:</label>
            <input
              placeholder="Please enter your password"
              type="password"
              id="password"
              {...register("password", {
                required: {
                  value: formValidationData.password.value,
                  message: formValidationData.password.passwordRequireMessage,
                },
              })}
            />
            <p className={Styles.inputControlErrorTextMessage}>{errors.password?.message} &nbsp;</p>
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
