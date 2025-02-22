import { createSignal } from "solid-js";
import { ProfileScreenProps } from "../ProfileScreen.types";
import { BadgeWire } from "@crabshell/public-client";

export function MyBadgesCard({ user: profile }: ProfileScreenProps) {
  const [badges, setBadges] = createSignal<BadgeWire[]>([]);
  return (
    <div class="card">
      <h2>Badges ({badges().length})</h2>
    </div>
  );
}
