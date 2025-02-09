import type { Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { ArticlesSection } from "./articles-section/ArticlesSection";
import { UsersCard } from "./users-card/UsersCard";
import { GroupsCard } from "./groups-card/GroupsCard";
import { PostsTimeline } from "./posts-timeline/PostsTimeline";
import { EventCalendar } from "./event-calendar/EventCalendar";
import { UserOfTheWeekCard } from "./user-of-the-week-card/UserOfTheWeekCard";

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
              <PostsTimeline />
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
