import "./global.css";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";
import App from "./app";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={ruRU}>
    <App />
  </ConfigProvider>
);
