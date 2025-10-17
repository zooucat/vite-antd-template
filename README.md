# vite-antd-template

A starter template built with **Vite**, **React**, **TypeScript**, and **Ant Design**.

## 🚀 Features

- ⚡️ **Vite + React + TypeScript** for fast development
- 🎨 **Ant Design v5** UI components with reset CSS
- 🧩 **Theme customization** using Ant Design design tokens
- 🧭 Simple project structure with `@` path alias
- 📊 Optional bundle analyzer with `rollup-plugin-visualizer`

## 🧰 Getting Started

1. **Clone the project**

   ```bash
   git clone https://github.com/zooucat/vite-antd-template.git

   cd vite-antd-template
   ```

2. **Install dependencies**

   ```bash
   # with yarn
   yarn install

   # or pnpm
   pnpm install

   # or npm
   npm install
   ```

3. **Start development server**

   ```bash
   # with yarn
   yarn dev

   # or pnpm
   pnpm dev

   # or npm
   npm run dev
   ```

4. **Build for production**

   ```bash
   # with yarn
   yarn build

   # or pnpm
   pnpm build

   # or npm
   npm run build
   ```

5. **(Optional) Analyze bundle**

   After building, open dist/report.html to see chunk size and dependency visualization.

## 🎨 Theming and Styles

Ant Design v5 uses a new design token system for global customization.

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
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
```
