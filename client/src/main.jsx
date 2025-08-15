import { createRoot } from "react-dom/client";
import "../public/css/main.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
