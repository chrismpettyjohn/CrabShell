import type { Component } from "solid-js";
import { SiteTitle, useAuth } from "@crabshell/shared-web";
import { ArticlesSection } from "./articles-section/ArticlesSection";
import { UsersCard } from "./users-card/UsersCard";
import { GroupsCard } from "./groups-card/GroupsCard";
import { EventCalendar } from "./event-calendar/EventCalendar";
import { UserOfTheWeekCard } from "./user-of-the-week-card/UserOfTheWeekCard";
import { UserContainer } from "./user-container/UserContainer";
import { DISCORD_INVITE_URL } from "../../App.const";
import { StoriesSection } from "./stories-section/StoriesSection";
import { UserLayout } from "../../components/user-layout/UserLayout";

const MeScreen: Component = () => {
  const { user } = useAuth();
  return (
    <UserLayout>
      <SiteTitle>Me</SiteTitle>
      <main>
        <div class="main-content">
          <StoriesSection />
          <br />
          <div class="grid">
            <div class="column col-3">
              <UsersCard />
              <UserOfTheWeekCard />
            </div>
            <div class="column col-6">
              <UserContainer user={user} />
              <ArticlesSection />
              <div class="card" style="display:flex;flex:1;justify-content:center;align-items:center;">
                <div style="text-align:center;">
                  <img src="/img/logo.png" class="card-logo" style="width: 240px;object-size:cover;" />
                  <br />
                  <a href={DISCORD_INVITE_URL} target="_blank" class="discord-link">
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
              <GroupsCard />
            </div>
          </div>
        </div>
      </main>
    </UserLayout>
  );
};

export default MeScreen;
