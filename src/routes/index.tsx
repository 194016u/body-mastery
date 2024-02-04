import { Route, Routes } from "react-router-dom";
import { ContactPage } from "../components/pages/ContactPage";
import { AestheticBodyPage } from "../components/pages/AestheticBodyPage";

import React from "react";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/asthetic-body" element={<AestheticBodyPage />} />
      </Routes>
    </div>
  );
};
