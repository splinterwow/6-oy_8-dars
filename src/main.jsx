import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

import GlobalContextProvider from "./context/useGlobal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
    <Toaster />
  </GlobalContextProvider>
);
