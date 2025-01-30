import type { Component } from "solid-js";
import { GuardUser } from "../../components/guard-user/GuardUser";
import { SiteTitle } from "../../components/site-title/SiteTitle";

export const PlayScreen: Component = () => {
  return (
    <GuardUser>
      <SiteTitle>Play</SiteTitle>PlayScreen
    </GuardUser>
  );
};
