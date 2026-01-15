import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function PrivateRoute() {
  const { isAuthenticated, loading } = useAuth();

  console.log("LOG ROTA: ", { isAuthenticated, loading });

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background-light">
        <p>Sincronizando...</p>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}