import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PatientContextProvider from "./contexts/PatientContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PatientContextProvider>
      <App />
    </PatientContextProvider>
  </StrictMode>
);
