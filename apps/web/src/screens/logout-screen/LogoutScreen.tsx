import { createEffect, onMount, type Component } from "solid-js";
import { SiteTitle, useAuth, UserGuard } from "@crabshell/shared-web";
import { redirect } from "@solidjs/router";

const LogoutScreen: Component = () => {
  const { setUser, user } = useAuth();
  onMount(async () => {
    localStorage.clear();
    setUser(null);
  });

  createEffect(() => {
    if (!user()) {
      return redirect("/login");
    }
  });

  return (
    <UserGuard>
      <SiteTitle>Logout</SiteTitle>
      LogoutScreen
    </UserGuard>
  );
};

export default LogoutScreen;
