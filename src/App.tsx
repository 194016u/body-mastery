import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ContactPage } from "./components/pages/ContactPage";
//import { AestheticBodyPAge } from "./components/pages/AestheticBodyPage";
import { AppRoutes } from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
