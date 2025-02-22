import { A } from "@solidjs/router";
import { SITE_NAME } from "../../App.const";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { SiteTitle, UserGuard } from "@crabshell/shared-web";

export function AboutScreen() {
  return (
    <>
      <SiteTitle>About</SiteTitle>
      <main>
        <div class="main-content news-article-page">
          <h2 style="margin:0;">Psalms 144:1-2</h2>
          <p style="margin:0;">
            Blessed be the LORD my strength, Which teacheth my hands to war, and my fingers to fight: My goodness, and my fortress; My high tower, and my
            deliverer; My shield, and he in whom I trust; Who subdueth my people under me.
          </p>
          <br />
          <h2 style="margin:0;">
            Built by <b>LeChris</b>
          </h2>
          <p style="margin:0;">
            {SITE_NAME} is designed and developed by <b>LeChris</b>
          </p>
          <br />
          <br />
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oj-qH2QJ4N0?autoplay=1&start=55"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style="flex:1;"
          />
          <br />
          <A href="/">
            <button class="btn-success" style={{ width: "100%" }}>
              Go back
            </button>
          </A>
        </div>
      </main>
    </>
  );
}

export default AboutScreen;
