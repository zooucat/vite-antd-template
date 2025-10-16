import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.tsx";

import "antd/dist/reset.css";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#1677ff",
        borderRadius: 8,
        fontSize: 14,
      },
    }}
  >
    <App />
  </ConfigProvider>
);
