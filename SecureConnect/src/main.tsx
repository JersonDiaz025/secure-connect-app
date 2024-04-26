import "./index.css";
import React from "react";
import App from "./router/App";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./graphql/config/apolloClient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
      <ToastContainer />
    </ApolloProvider>
  </React.StrictMode>
);
