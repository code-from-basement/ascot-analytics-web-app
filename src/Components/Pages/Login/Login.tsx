import Styles from "./Login.module.css";
import hestiaLogo from "./../../../assets/Image/hestiaAgora-logo.png";
import { PasswordRoundedIcon, HelpOutlineRoundedIcon, LoginRoundedIcon } from "./../../UI/Icons/IconsLibrary";
import React from "react";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../../Context/GlobalContext";

/**Type Declaration */
type formValues = {
  username: string;
  password: string;
  message: string;
  id: string | undefined;
  loginDate: string;
};
//-------------------/

/**Form Validation data pattern-values-messages */
const formValidationData = {
  username: {
    value: true,
    emailReGexPattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    emailErrorMessage: "*Please enter you email address.",
    emailPatternErrorMessage: "*Please enter a valid email address. example@example.com",
  },
  password: {
    value: true,
    passwordRequireMessage: "*Invalid password, please try again.",
  },
};
// ----------------------------------------------//

function Login() {
  const loginForm = useForm<formValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  }); //use useFrom from "React Hook Form"
  const { register, handleSubmit, formState } = loginForm; //destructure register & handle submit & formState from loginForm variable

  const { errors } = formState;

  /**Submit form handler function */
  const onSubmitHandler = (data: formValues) => {
    const modData = { ...data, loginDateInfo: new Date().toUTCString() };
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
              type="email"
              id="username"
              {...register("username", {
                pattern: {
                  value: formValidationData.username.emailReGexPattern,
                  message: formValidationData.username.emailPatternErrorMessage,
                },
                required: {
                  value: formValidationData.username.value,
                  message: formValidationData.username.emailErrorMessage,
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
