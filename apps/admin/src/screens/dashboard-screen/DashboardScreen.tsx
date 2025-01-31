import type { Component } from "solid-js";
import { SiteTitle } from "../../components/site-title/SiteTitle";
import { UserLayout } from "../../components/user-layout/UserLayout";

const MeScreen: Component = () => {
  return (
    <UserLayout>
      <SiteTitle>Dashboard</SiteTitle>
      <main>
        <div class="main-content">
          <p>hello and goodbye</p>
        </div>
      </main>
    </UserLayout>
  );
};

export default MeScreen;
