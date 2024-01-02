import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Application from "./Components/Pages/Application/Application";
import BarChart from "./Components/Layouts/Main/ChartContainer/BarChart/BarChart";
import LineChart from "./Components/Layouts/Main/ChartContainer/LineChart/LineChart";
import { useEffect, useState } from "react";
import LoginCognito from "./Components/Pages/Login/LoginCognito/LoginCognito";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { fetchAuthSession } from "aws-amplify/auth";

import { useGlobalContext } from "./Context/GlobalContext";

function App({ user, signOut }: any) {
  const { signInInfo, setSignInInfo }: any = useGlobalContext();
  // const { signOutFunc, idToken } = signInInfo;

  useEffect(() => {
    if (user)
      setSignInInfo((prevData: any) => {
        return { ...prevData, info: user, signOutFunc: signOut };
      });
  }, [user]);

  /**Fetching the idToken from AuthSession */
  useEffect(() => {
    async function currentSession() {
      try {
        const authToken = (await fetchAuthSession()).tokens?.idToken?.toString();
        setSignInInfo((prevData: any) => {
          return { ...prevData, idToken: authToken };
        });
      } catch (err) {
        console.log("error from token getter");
      }
    }
    currentSession();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
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
