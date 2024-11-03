import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SimpleRouter from "./examples/SimpleRouter.tsx";

const root_element = document.getElementById("root");

createRoot(root_element!).render(
  <StrictMode>
    <>
      <SimpleRouter />
    </>
  </StrictMode>
);
