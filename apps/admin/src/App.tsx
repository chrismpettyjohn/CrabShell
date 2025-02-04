import type { Component } from "solid-js";
import { AuthProvider } from "./context/AuthContext";
import { Router } from "./screens/Router";
import { Toaster } from "solid-toast";

export const CrabShellApp: Component = () => {
  return (
    <AuthProvider>
      <Router />
      <Toaster position="top-right" gutter={8} />
    </AuthProvider>
  );
};
