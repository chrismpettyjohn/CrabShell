import { A } from "@solidjs/router";
import { SITE_NAME } from "../../App.const";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { SiteTitle, useAuth, UserGuard } from "@crabshell/shared-web";
import { Show, createSignal, onMount } from "solid-js";

const bibleVerses = [
  "The Lord is my shepherd; I shall not want. - Psalm 23:1",
  "For I know the plans I have for you, declares the Lord. - Jeremiah 29:11",
  "I can do all things through Christ who strengthens me. - Philippians 4:13",
  "Trust in the Lord with all your heart. - Proverbs 3:5",
  "The name of the Lord is a strong tower. - Proverbs 18:10",
  "The Lord is my light and my salvation; whom shall I fear? - Psalm 27:1",
  "But the fruit of the Spirit is love, joy, peace. - Galatians 5:22",
  "Be strong and courageous. Do not be afraid. - Joshua 1:9",
  "The joy of the Lord is your strength. - Nehemiah 8:10",
  "The Lord bless you and keep you. - Numbers 6:24",
];

export function AboutScreen() {
  const { user } = useAuth();
  const [dailyVerse, setDailyVerse] = createSignal("");

  onMount(() => {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    setDailyVerse(bibleVerses[randomIndex]);
  });

  return (
    <>
      <SiteTitle>About</SiteTitle>
      <Show when={!!user()}>
        <SiteSidebar />
      </Show>
      <main>
        <div class="main-content">
          <div class="grid">
            <div class="column col-4">
              <div class="card">
                <h2 style="margin:0;">
                  <i class="fa fa-cross" style="margin-right: 8px;" />
                  Today's Message
                </h2>
                <p style="margin:0;">{dailyVerse()}</p>
              </div>
              <div class="card" style="justify-content:center;align-items:center;display:flex;flex-direction: column;">
                <h2 style="margin:0;">Crabshell v1</h2>
                <p>Designed and developed from the ground up with a focus on user experience and functionality.</p>
                <p>Crabshell is built using the best tools such as NodeJS, Typescript, Bun, SolidJS and NestJS</p>
                <img src="/img/logo.png" style="height:220px;object-fit:cover;" />
              </div>
              <h2 style="margin:auto;">
                Built by <b>LeChris</b>
              </h2>
            </div>
            <div class="column col-8">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/oj-qH2QJ4N0?autoplay=1&start=55"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                style="flex:1;"
              />
            </div>
          </div>
          <Show when={!user()}>
            <br />
            <A href="/">
              <button class="btn-success" style={{ width: "100%" }}>
                Go back
              </button>
            </A>
          </Show>
        </div>
      </main>
    </>
  );
}

export default AboutScreen;
