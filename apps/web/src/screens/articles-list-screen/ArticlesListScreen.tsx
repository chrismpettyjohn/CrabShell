import type { Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { GuardUser } from "../../components/guard-user/GuardUser";

export const ArticlesListScreen: Component = () => {
  return (
    <GuardUser>
      <SiteSidebar />
      <main>
        <div class="main-content">Articles</div>
      </main>
    </GuardUser>
  );
};
