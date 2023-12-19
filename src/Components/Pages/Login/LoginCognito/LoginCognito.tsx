import React, { useEffect } from "react";
import Styles from "./LoginCognito.module.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useNavigate } from "react-router-dom";

Amplify.configure(awsExports);

function LoginCognito({}) {
  const navigate = useNavigate();

  return (
    <Authenticator>
      {({ signOut, user }) => {
        useEffect(() => {
          setTimeout(() => {
            navigate("/application");
          }, 1000);
        }, []);
        return (
          <section className={Styles.loadingEntry}>
            <h1>Loading...</h1>
          </section>
        );
      }}
    </Authenticator>
  );
}

export default LoginCognito;
