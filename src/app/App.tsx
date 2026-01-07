import React from "react";
import AppRoutes from "../routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
