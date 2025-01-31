import { onMount, type Component } from "solid-js";
import { UserGuard } from "../../components/user-guard/UserGuard";
import { SiteTitle } from "../../components/site-title/SiteTitle";
import { authService } from "@crabshell/client";
import { redirect } from "@solidjs/router";
import { useAuth } from "../../context/AuthContext";

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
