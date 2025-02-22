import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { useParams } from "@solidjs/router";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { createSignal, onMount, Show } from "solid-js";
import { groupsService, GroupWire } from "@crabshell/public-client";
import toast from "solid-toast";

export function GroupsViewScreen() {
  const { groupId } = useParams<{ groupId: string }>();
  const [group, setGroup] = createSignal<GroupWire | null>(null);

  onMount(async () => {
    try {
      const response = await groupsService.getById(Number(groupId));
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
          <div class="card">
            <h1 style="margin:0;">{groupId}</h1>
            <Show when={!!group()} fallback={<i class="fa fa-spinner fa-spin" />}>
              group {groupId}
            </Show>
          </div>
        </div>
      </main>
    </UserGuard>
  );
}

export default GroupsViewScreen;
