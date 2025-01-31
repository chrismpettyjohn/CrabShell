import type { Component } from "solid-js";
import { AuthProvider } from "./context/AuthContext";
import { Router } from "./screens/Router";

export const CrabShellApp: Component = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
