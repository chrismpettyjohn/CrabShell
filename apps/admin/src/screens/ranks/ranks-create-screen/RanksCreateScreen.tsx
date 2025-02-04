import {
  AdminRankCreateParams,
  adminRankService,
} from "@crabshell/admin-client";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { RanksEditor } from "../ranks-editor/RanksEditor";
import toast from "solid-toast";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { SiteTitle } from "../../../components/site-title/SiteTitle";

export function RanksCreateScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = createSignal(false);

  async function onCreate(dto: AdminRankCreateParams) {
    try {
      if (loading()) {
        return;
      }
      setLoading(true);
      const rank = await adminRankService.create(dto);
      setLoading(false);
      toast.success("Rank successfully created");
      return navigate(`/ranks/${rank.id}`);
    } catch (e: any) {
      toast.error("Failed to create rank");
      setLoading(false);
      throw e;
    }
  }

  return (
    <UserLayout>
      <SiteTitle>Create Rank</SiteTitle>
      <h1>Create Rank</h1>
      <div class="card">
        <RanksEditor onSave={onCreate} />
      </div>
    </UserLayout>
  );
}

export default RanksCreateScreen;
