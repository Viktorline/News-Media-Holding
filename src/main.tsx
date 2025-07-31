import "./global.css";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ConfigProvider locale={ruRU}>
      <App />
    </ConfigProvider>
  </Provider>
);
