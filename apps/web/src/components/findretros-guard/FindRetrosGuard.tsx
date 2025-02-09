import {
  findRetrosService,
  FindRetrosVoteStatusResponse,
} from "@crabshell/public-client";
import { createEffect, createSignal, JSX, onMount, Show } from "solid-js";
import { FINDRETROS_GUARD_ENABLED } from "../../App.const";

export interface FindRetrosGuardProps {
  children: JSX.Element;
}

export function FindRetrosGuard({ children }: FindRetrosGuardProps) {
  const [vote, setVote] = createSignal<FindRetrosVoteStatusResponse>();

  onMount(async () => {
    if (!FINDRETROS_GUARD_ENABLED) {
      return;
    }
    const didVote = await findRetrosService.getVoteStatus();
    setVote(didVote);
  });

  createEffect(() => {
    if (!FINDRETROS_GUARD_ENABLED) {
      return;
    }
    if (vote() && !vote()?.success && vote()?.href) {
      window.location.href = vote()!.href!;
    }
  });

  if (!FINDRETROS_GUARD_ENABLED) {
    return children;
  }

  return (
    <Show when={vote()?.success} fallback={<i class="fa fa-spinner fa-spin" />}>
      {children}
    </Show>
  );
}
