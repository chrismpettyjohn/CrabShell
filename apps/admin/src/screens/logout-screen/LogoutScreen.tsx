import { onMount, type Component } from "solid-js";
import { authService } from "@crabshell/admin-client";
import { redirect } from "@solidjs/router";
import { SiteTitle, useAuth, UserGuard } from "@crabshell/shared-web";

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
