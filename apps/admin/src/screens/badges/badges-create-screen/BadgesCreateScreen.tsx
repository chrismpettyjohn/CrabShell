import { useNavigate } from "@solidjs/router";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { BadgesEditor } from "../badges-editor/BadgesEditor";
import {
  AdminBadgeCreateParams,
  adminBadgeService,
} from "@crabshell/admin-client";
import toast from "solid-toast";
import { SiteTitle } from "@crabshell/shared-web";

export function BadgesCreateScreen() {
  const navigate = useNavigate();

  async function onCreate(dto: AdminBadgeCreateParams) {
    try {
      const response = await adminBadgeService.create(dto);
      toast.success("Successfully created badge");
      navigate(`/badges/${response.code}`);
    } catch (e: any) {
      toast.error("Failed to create badge");
      throw e;
    }
  }

  return (
    <UserLayout>
      <SiteTitle>Create Badge</SiteTitle>
      <h1>Create Badge</h1>
      <div class="card">
        <BadgesEditor onSave={onCreate} />
      </div>
    </UserLayout>
  );
}

export default BadgesCreateScreen;
