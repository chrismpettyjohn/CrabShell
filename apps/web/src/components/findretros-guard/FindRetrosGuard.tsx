import { findRetrosService, FindRetrosVoteStatusResponse } from "@crabshell/public-client";
import { createEffect, createSignal, JSX, onMount, Show } from "solid-js";
import { FINDRETROS_GUARD_ENABLED } from "../../App.const";

export interface FindRetrosGuardProps {
  children: JSX.Element;
}

const FINDRETROS_VOTE_EXPIRATION = "findretros-vote-expiration";

export function FindRetrosGuard({ children }: FindRetrosGuardProps) {
  const [vote, setVote] = createSignal<FindRetrosVoteStatusResponse>();
  const storedExpiration = localStorage.getItem(FINDRETROS_VOTE_EXPIRATION);
  const now = Date.now();
  const isVoteExpired = !storedExpiration || now >= Number(storedExpiration);

  const skipVoting = !isVoteExpired || !FINDRETROS_GUARD_ENABLED;

  onMount(async () => {
    if (skipVoting) {
      return;
    }
    const didVote = await findRetrosService.getVoteStatus();
    setVote(didVote);
  });

  createEffect(() => {
    if (skipVoting) {
      return;
    }
    if (vote() && !vote()?.success && vote()?.href) {
      const expirationTime = now + 24 * 60 * 60 * 1000;
      localStorage.setItem(FINDRETROS_VOTE_EXPIRATION, expirationTime.toString());
      window.location.href = vote()!.href!;
    }
  });

  if (skipVoting) {
    return children;
  }

  return (
    <Show when={vote()?.success} fallback={<i class="fa fa-spinner fa-spin" />}>
      {children}
    </Show>
  );
}
