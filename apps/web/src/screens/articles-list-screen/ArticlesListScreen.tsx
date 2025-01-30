import type { Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { GuardUser } from "../../components/guard-user/GuardUser";
import { SiteTitle } from "../../components/site-title/SiteTitle";

export const ArticlesListScreen: Component = () => {
  return (
    <GuardUser>
      <SiteTitle>Articles</SiteTitle>
      <SiteSidebar />
      <main>
        <div class="main-content">Articles</div>
      </main>
    </GuardUser>
  );
};
