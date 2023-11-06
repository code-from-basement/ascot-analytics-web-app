import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Application from "./Components/Pages/Application/Application";
import Login from "./Components/Pages/Login/Login";
import HomePage from "./Components/Pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route index element={<Navigate to="application" />} />
        <Route path="application" element={<Application />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
