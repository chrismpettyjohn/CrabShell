import { useParams } from "@solidjs/router";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { BadgesEditor } from "../badges-editor/BadgesEditor";
import { createSignal, onMount, Show } from "solid-js";
import {
  AdminBadgeCreateParams,
  adminBadgeService,
  AdminBadgeWire,
} from "@crabshell/admin-client";
import toast from "solid-toast";
import { SiteTitle } from "../../../components/site-title/SiteTitle";

export function BadgesEditScreen() {
  const { badgeCode } = useParams();
  const [badge, setBadge] = createSignal<AdminBadgeWire>();

  onMount(async () => {
    try {
      const response = await adminBadgeService.getByCode(badgeCode);
      setBadge(response);
    } catch (e: any) {
      toast.error("Failed to load fetch");
      throw e;
    }
  });

  async function onEdit(dto: AdminBadgeCreateParams) {
    await adminBadgeService.updateByCode(badgeCode, dto);
  }

  return (
    <UserLayout>
      <SiteTitle>Edit Badge</SiteTitle>
      <h1>Edit Badge</h1>
      <div class="card">
        <Show when={badge()} fallback={<i class="fa fa-spinner fa-spin" />}>
          <BadgesEditor defaultBadge={() => badge()!} onSave={onEdit} />
        </Show>
      </div>
    </UserLayout>
  );
}

export default BadgesEditScreen;
