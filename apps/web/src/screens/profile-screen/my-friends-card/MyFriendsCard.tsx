import { createSignal } from "solid-js";
import { ProfileScreenProps } from "../ProfileScreen.types";
import { UserWire } from "@crabshell/public-client";

export function MyFriendsCard({ user: profile }: ProfileScreenProps) {
  const [friends, setFriends] = createSignal<UserWire[]>([]);

  return (
    <div class="card">
      <h2>Friends ({friends().length})</h2>
    </div>
  );
}
