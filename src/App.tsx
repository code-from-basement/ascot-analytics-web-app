import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Application from "./Components/Pages/Application/Application";
import BarChart from "./Components/Layouts/Main/ChartContainer/BarChart/BarChart";
import LineChart from "./Components/Layouts/Main/ChartContainer/LineChart/LineChart";
import { useEffect, useState } from "react";
import LoginCognito from "./Components/Pages/Login/LoginCognito/LoginCognito";
import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { fetchAuthSession } from "aws-amplify/auth";
import { AuthTokens } from "@aws-amplify/auth";
import { getCurrentUser, GetCredentialsOptions } from "@aws-amplify/auth";

import { useGlobalContext } from "./Context/GlobalContext";

function App({ user, signOut }: any) {
  const { signInInfo, setSignInInfo }: any = useGlobalContext();
  const { signOutFunc, idToken } = signInInfo;

  useEffect(() => {
    user && setSignInInfo({ info: user, signOutFunc: signOut });
    // !user?.info?.signInDetails && signOutFunc;
  }, [user]);

  useEffect(() => {
    async function currentSession() {
      try {
        const authToken = (await fetchAuthSession()).tokens?.idToken?.toString();
        setSignInInfo({ idToken: authToken });
      } catch (err) {
        console.log("error from token getter");
      }
    }
    currentSession();
  }, []);
  console.log(idToken);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<LoginCognito />} />
        <Route index element={<Navigate to="application" />} />
        <Route path="application" element={<Application />}>
          <Route index element={<Navigate to="barchart" />} />
          <Route path="barchart" element={<BarChart />} />
          <Route path="linechart" element={<LineChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
