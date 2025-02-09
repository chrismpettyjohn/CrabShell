import type { Component } from "solid-js";
import { UserLayout } from "../../components/user-layout/UserLayout";
import { SiteTitle } from "@crabshell/shared-web";

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
