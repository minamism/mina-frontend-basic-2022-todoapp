import React from "react";
import ReactDOM from "react-dom";
import { MainPage } from "./components/Pages/MainPage";
import { AlertHandlerProvider } from "./contexts/alert_handler";
import { AlertManager } from "./components/Organisms/AlertManager";
import "./style.css";

ReactDOM.render(
  <AlertHandlerProvider>
    <MainPage/>
    <AlertManager/>
  </AlertHandlerProvider>
, document.getElementById("app"));
