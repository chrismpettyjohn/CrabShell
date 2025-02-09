import type { Component } from "solid-js";
import { Router } from "./screens/Router";
import { SidebarProvider } from "./context/SidebarContext";
import { OnlineUsersProvider } from "./context/OnlineUsersContext";
import { Toaster } from "solid-toast";
import { AuthProvider } from "@crabshell/shared-web";

export const CrabShellApp: Component = () => {
  return (
    <>
      <AuthProvider>
        <OnlineUsersProvider>
          <SidebarProvider>
            <Router />
          </SidebarProvider>
        </OnlineUsersProvider>
      </AuthProvider>
      <Toaster position="top-right" gutter={8} />
    </>
  );
};
