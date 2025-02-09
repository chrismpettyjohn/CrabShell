import type { Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { ArticlesSection } from "./articles-section/ArticlesSection";
import { UsersCard } from "./users-card/UsersCard";
import { GroupsCard } from "./groups-card/GroupsCard";
import { EventCalendar } from "./event-calendar/EventCalendar";
import { UserOfTheWeekCard } from "./user-of-the-week-card/UserOfTheWeekCard";
import { UserContainer } from "./user-container/UserContainer";
import { DISCORD_INVITE_URL, SITE_NAME } from "../../App.const";

console.log(DISCORD_INVITE_URL);

const MeScreen: Component = () => {
  return (
    <UserGuard>
      <SiteTitle>Me</SiteTitle>
      <SiteSidebar />
      <main>
        <div class="main-content">
          <ArticlesSection />
          <br />
          <div class="grid">
            <div class="column col-3">
              <UsersCard />
              <GroupsCard />
            </div>
            <div class="column col-6">
              <UserContainer />
              <div
                class="card"
                style="display:flex;flex:1;justify-content:center;align-items:center;"
              >
                <div style="text-align:center;">
                  <img
                    src="/img/logo.png"
                    class="card-logo"
                    style="width: 240px;object-size:cover;"
                  />
                  <br />
                  <br />
                  <h2>Welcome to {SITE_NAME}!</h2>
                  <p>Join our vibrant community and make new friends.</p>
                  <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    class="discord-link"
                  >
                    <button class="enter-hotel-btn">
                      <i class="fab fa-discord" style="margin-right: 8px;" />
                      Join Our Discord
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="column col-3">
              <EventCalendar />
              <UserOfTheWeekCard />
            </div>
          </div>
        </div>
      </main>
    </UserGuard>
  );
};

export default MeScreen;
