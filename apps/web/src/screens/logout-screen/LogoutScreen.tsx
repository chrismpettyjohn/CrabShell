import { onMount, type Component } from "solid-js";
import { SiteTitle, useAuth, UserGuard } from "@crabshell/shared-web";
import { authService } from "@crabshell/public-client";
import { redirect } from "@solidjs/router";

const LogoutScreen: Component = () => {
  const { setUser } = useAuth();
  onMount(async () => {
    await authService.logout();
    setUser(null);
    return redirect("/login");
  });

  return (
    <UserGuard>
      <SiteTitle>Logout</SiteTitle>
      LogoutScreen
    </UserGuard>
  );
};

export default LogoutScreen;
