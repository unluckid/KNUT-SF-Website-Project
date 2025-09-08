import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Index } from "./screens/Index/index.tsx";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Index />
  </StrictMode>,
);
