import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./layout/Dashboard.jsx";
import Apps from "./pages/Apps.jsx";
import Home from "./pages/Home.jsx";
import Installation from "./pages/Installation.jsx";
import HomePage from "./hompage/HomePage.jsx";
import TrendingApps from "./hompage/TrendingApps.jsx";
import AppDetails from "./pages/AppDetails.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<HomePage/>}/>
        <Route path="/" element = {<TrendingApps/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/apps" element={<Apps/>} />
        <Route path="/apps/:id" element={<AppDetails/>}/>
        <Route path="/installation" element={<Installation/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
