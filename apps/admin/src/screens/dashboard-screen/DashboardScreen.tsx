import type { Component } from "solid-js";
import { SiteTitle } from "../../components/site-title/SiteTitle";
import { UserLayout } from "../../components/user-layout/UserLayout";

const MeScreen: Component = () => {
  return (
    <UserLayout>
      <SiteTitle>Dashboard</SiteTitle>
      <div class="card" style="height:500px;">
        <h1>Development Build</h1>
        <p>
          CrabShell is still in very early development and may be missing major
          features or have breaking changes suddenly.
        </p>
      </div>
    </UserLayout>
  );
};

export default MeScreen;
