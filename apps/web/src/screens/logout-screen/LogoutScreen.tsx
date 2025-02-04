import { onMount, type Component } from "solid-js";
import { GuardUser } from "../../components/guard-user/GuardUser";
import { SiteTitle } from "../../components/site-title/SiteTitle";
import { authService } from "@crabshell/public-client";
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
    <GuardUser>
      <SiteTitle>Logout</SiteTitle>
      LogoutScreen
    </GuardUser>
  );
};

export default LogoutScreen;
