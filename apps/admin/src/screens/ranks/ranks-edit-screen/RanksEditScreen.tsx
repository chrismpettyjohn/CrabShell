import { useParams } from "@solidjs/router";
import { createEffect, createSignal, onMount, Show } from "solid-js";
import {
  AdminRankCreateParams,
  adminRankService,
  AdminRankWire,
} from "@crabshell/admin-client";
import { RanksEditor } from "../ranks-editor/RanksEditor";
import toast from "solid-toast";
import { UserLayout } from "../../../components/user-layout/UserLayout";

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

  createEffect(() => console.log("rank: ", rank()));

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
    <UserLayout>
      <h1>Edit Rank</h1>
      <div class="card">
        <Show when={rank()} fallback={<i class="fa fa-spinner fa-spin" />}>
          <RanksEditor defaultRank={() => rank()!} onSave={onEdit} />
        </Show>
      </div>
    </UserLayout>
  );
}

export default RanksEditScreen;
