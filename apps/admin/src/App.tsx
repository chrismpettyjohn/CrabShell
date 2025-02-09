import type { Component } from "solid-js";
import { Router } from "./screens/Router";
import { Toaster } from "solid-toast";
import { AuthProvider } from "@crabshell/shared-web";

export const CrabShellApp: Component = () => {
  return (
    <AuthProvider>
      <Router />
      <Toaster position="top-right" gutter={8} />
    </AuthProvider>
  );
};
