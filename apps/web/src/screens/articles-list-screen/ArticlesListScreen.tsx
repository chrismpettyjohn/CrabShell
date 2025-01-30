import type { Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";

export const ArticlesListScreen: Component = () => {
  return (
    <>
      <SiteSidebar />
      <main>
        <div class="main-content">Articles</div>
      </main>
    </>
  );
};
