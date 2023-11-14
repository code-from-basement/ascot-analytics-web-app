import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Application from "./Components/Pages/Application/Application";
import Login from "./Components/Pages/Login/Login";
import HomePage from "./Components/Pages/HomePage/HomePage";
import BarChart from "./Components/Layouts/Main/ChartContainer/BarChart/BarChart";
import LineChart from "./Components/Layouts/Main/ChartContainer/LineChart/LineChart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route index element={<Navigate to="application" />} />
        <Route path="application" element={<Application />} >
          <Route path="barchart" element={<BarChart />} />
          <Route path="linechart" element={<LineChart />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
