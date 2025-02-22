import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { useParams } from "@solidjs/router";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { createSignal, onMount, Show } from "solid-js";
import { usersService, UserWire } from "@crabshell/public-client";
import toast from "solid-toast";
import { UserContainer } from "../me-screen/user-container/UserContainer";
import { MyFriendsCard } from "./my-friends-card/MyFriendsCard";
import { MyGroupsCard } from "./my-groups-card/MyGroupsCard";
import { MyRoomsCard } from "./my-rooms-card/MyRoomsCard";
import { MyBadgesCard } from "./my-badges-card/MyBadgesCard";
import { MyStatsCard } from "./my-stats-card/MyStatsCard";

export function ProfileScreen() {
  const { username } = useParams<{ username: string }>();
  const [profile, setProfile] = createSignal<UserWire | null>(null);

  onMount(async () => {
    try {
      const response = await usersService.getByUsername(username);
      setProfile(response);
    } catch (e: any) {
      toast.error(`Failed to fetch profile of ${username}`);
      throw e;
    }
  });

  return (
    <UserGuard>
      <SiteTitle children={`Profile - ${username}`} />
      <SiteSidebar />
      <main>
        <div class="main-content">
          <Show when={!!profile()} fallback={<i class="fa fa-spinner fa-spin" />}>
            <h2>🦀 {username}</h2>
            <div class="grid" style={{ flex: 0, height: "fit-content" }}>
              <div class="column col-8">
                <UserContainer user={profile} />
              </div>
              <div class="column col-4">
                <MyStatsCard user={profile} />
              </div>
            </div>
            <br />
            <div class="grid">
              <div class="column col-6">
                <MyBadgesCard user={profile} />
                <MyFriendsCard user={profile} />
              </div>
              <div class="column col-6">
                <MyGroupsCard user={profile} />
                <MyRoomsCard user={profile} />
              </div>
            </div>
          </Show>
        </div>
      </main>
    </UserGuard>
  );
}

export default ProfileScreen;
