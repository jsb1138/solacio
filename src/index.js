import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StatusBar, Style } from "@capacitor/status-bar";
// import { usePromiseTracker } from "react-promise-tracker";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById("root"));

// iOS only
window.addEventListener("statusTap", function () {
  console.log("statusbar tapped");
});

// Display content under transparent status bar (Android only)
StatusBar.setOverlaysWebView({ overlay: true });

// const LoadingIndicator = (props) => {
//   const { promiseInProgress } = usePromiseTracker();
//   return promiseInProgress && <h1>async call in progress...</h1>;
// };

root.render(
  <React.StrictMode>
    <App />
    {/* <LoadingIndicator /> */}
  </React.StrictMode>
);
