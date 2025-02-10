import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { useParams } from "@solidjs/router";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { createSignal, onMount, Show } from "solid-js";
import { usersService, UserWire } from "@crabshell/public-client";
import toast from "solid-toast";
import { UserContainer } from "../me-screen/user-container/UserContainer";

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
          <div class="card">
            <h1 style="margin:0;">{username}</h1>
            <Show
              when={!!profile()}
              fallback={<i class="fa fa-spinner fa-spin" />}
            >
              <UserContainer user={profile} />
            </Show>
          </div>
        </div>
      </main>
    </UserGuard>
  );
}

export default ProfileScreen;
