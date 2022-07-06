import React from "react";
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "@/pages/app";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
