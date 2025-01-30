import type { Component } from "solid-js";
import { GuardUser } from "../../components/guard-user/GuardUser";
import { SiteTitle } from "../../components/site-title/SiteTitle";

const LogoutScreen: Component = () => {
  return (
    <GuardUser>
      <SiteTitle>Logout</SiteTitle>
      LogoutScreen
    </GuardUser>
  );
};

export default LogoutScreen;
