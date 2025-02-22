import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { useParams } from "@solidjs/router";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { createSignal, onMount, Show } from "solid-js";
import { groupsService, GroupWire } from "@crabshell/public-client";
import toast from "solid-toast";
import { GroupMembersCard } from "./group-members-card/GroupMembersCard";
import { GroupStatsCard } from "./group-stats-card/GroupStatsCard";
import { GroupInfoCard } from "./group-info-card/GroupInfoCard";

export function GroupsProfileScreen() {
  const { groupId } = useParams<{ groupId: string }>();
  const [group, setGroup] = createSignal<GroupWire | null>(null);

  onMount(async () => {
    try {
      const response = await groupsService.getById(Number(groupId));
      console.log(response.createdAt);
      setGroup(response);
    } catch (e: any) {
      toast.error(`Failed to fetch profile of ${groupId}`);
      throw e;
    }
  });

  return (
    <UserGuard>
      <SiteTitle children={`Profile - ${groupId}`} />
      <SiteSidebar />
      <main>
        <div class="main-content">
          <Show when={!!group()} fallback={<i class="fa fa-spinner fa-spin" />}>
            <h2>🦀 {group()?.name}</h2>
            <div class="grid" style={{ flex: 0, height: "fit-content" }}>
              <div class="column col-4">
                <GroupInfoCard group={group} />
                <GroupStatsCard group={group} />
              </div>
              <div class="column col-8">
                <GroupMembersCard group={group} />
              </div>
            </div>
          </Show>
        </div>
      </main>
    </UserGuard>
  );
}

export default GroupsProfileScreen;
