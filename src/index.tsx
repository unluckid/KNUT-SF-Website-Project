import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Index1 } from "./screens/IndexF";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Index1 />
  </StrictMode>,
);
//d