import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Application from "./Components/Pages/Application/Application";
import HomePage from "./Components/Pages/HomePage/HomePage";
import BarChart from "./Components/Layouts/Main/ChartContainer/BarChart/BarChart";
import LineChart from "./Components/Layouts/Main/ChartContainer/LineChart/LineChart";
import { useState } from "react";
import LoginCognito from "./Components/Pages/Login/LoginCognito/LoginCognito";

function App() {
  const [val, setVal] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginCognito />} />
        <Route index element={val ? <Navigate to="application" /> : <Navigate to="login" />} />
        <Route path="/" element={<HomePage />} />
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

export default App;
