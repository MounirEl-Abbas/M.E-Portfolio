import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/css/main.css";

//Context
import AppContextProvider from "./context/AppContext";

ReactDOM.render(
  <AppContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppContextProvider>,
  document.getElementById("root")
);
