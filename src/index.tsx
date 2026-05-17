import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles.scss";

const container = document.getElementById("root");
const root = createRoot(container); // 1. Create root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); // 2. Render app
