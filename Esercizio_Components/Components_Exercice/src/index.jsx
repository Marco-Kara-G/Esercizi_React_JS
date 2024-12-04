import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRender from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRender />
  </StrictMode>
);
