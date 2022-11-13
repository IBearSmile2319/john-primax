import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.css";
import "antd/dist/antd.variable.min.css";
ConfigProvider.config({
  theme: {
    primaryColor: "#FF6900",
    errorColor: "#ff4d4f",
    warningColor: "#faad14",
    successColor: "#52c41a",
    infoColor: "#1890ff",
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
