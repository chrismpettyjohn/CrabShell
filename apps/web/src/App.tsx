import type { Component } from "solid-js";
import { SiteSidebar } from "./components/site-sidebar/SiteSidebar";
import { AuthProvider } from "./context/AuthContext";
import { Router } from "./screens/Router";

export const CrabShellApp: Component = () => {
  return (
    <AuthProvider>
      <SiteSidebar />
      <Router />
    </AuthProvider>
  );
};
