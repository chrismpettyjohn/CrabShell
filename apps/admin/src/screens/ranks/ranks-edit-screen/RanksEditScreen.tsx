import { useParams } from "@solidjs/router";
import { createSignal, onMount, Show } from "solid-js";
import {
  AdminRankCreateParams,
  adminRankService,
  AdminRankWire,
} from "@crabshell/admin-client";
import { RanksEditor } from "../ranks-editor/RanksEditor";
import toast from "solid-toast";
import { SiteTitle } from "@crabshell/shared-web";
import { RankLayout } from "../RankLayout";

export function RanksEditScreen() {
  const { rankId } = useParams();
  const [loading, setLoading] = createSignal(false);
  const [rank, setRank] = createSignal<AdminRankWire>();

  onMount(async () => {
    try {
      const response = await adminRankService.getById(Number(rankId));
      setRank({ ...response });
    } catch (error) {
      toast.error("Failed to fetch rank");
      console.error(error);
    }
  });

  async function onEdit(dto: AdminRankCreateParams) {
    try {
      setLoading(true);
      await adminRankService.updateById(Number(rankId), dto);
      toast.success("Rank successfully updated");
    } catch (error) {
      toast.error("Failed to update rank");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <RankLayout rankId={Number(rankId)}>
      <SiteTitle>Edit Rank</SiteTitle>
      <h1>Edit Rank</h1>
      <div class="card">
        <Show when={rank()} fallback={<i class="fa fa-spinner fa-spin" />}>
          <RanksEditor defaultRank={() => rank()!} onSave={onEdit} />
        </Show>
      </div>
    </RankLayout>
  );
}

export default RanksEditScreen;
