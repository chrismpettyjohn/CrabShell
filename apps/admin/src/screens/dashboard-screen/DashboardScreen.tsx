import type { Component } from "solid-js";
import { SiteTitle } from "../../components/site-title/SiteTitle";
import { UserLayout } from "../../components/user-layout/UserLayout";

const MeScreen: Component = () => {
  return (
    <UserLayout>
      <SiteTitle>Dashboard</SiteTitle>
      <p>hello and goodbye</p>
    </UserLayout>
  );
};

export default MeScreen;
