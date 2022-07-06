import React from "react";
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "@/pages/app";
import '@/styles/global.css'

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
