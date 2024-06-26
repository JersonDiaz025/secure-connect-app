import "./index.css";
import React from "react";
import App from "./router/AppRouter";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
