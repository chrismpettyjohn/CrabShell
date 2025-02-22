import { UserWire } from "@crabshell/public-client";
import { createSignal, onMount } from "solid-js";
import { IMAGER_BASE_URL } from "../../../App.const";
import { A } from "@solidjs/router";

interface UsersListCardProps {
  getUsers: () => Promise<UserWire[]>;
}

export function UsersListCard({ getUsers }: UsersListCardProps) {
  const [users, setUsers] = createSignal<UserWire[]>([]);

  onMount(async () => {
    const response = await getUsers();
    setUsers(response);
  });

  return (
    <div class="users-list">
      {users()
        .slice(0, 5)
        .map((_) => (
          <A href={`/profile/${_.username}`}>
            <div class="row">
              <div class="avatar-container">
                <img class="avatar" src={`${IMAGER_BASE_URL}?figure=${_.look}&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif`} />
              </div>
              <div class="avatar-info">
                <h4>{_.username}</h4>
                <img src="https://i.imgur.com/6Dq8uGr.png" class="status" />
                <p>{_.motto}</p>
              </div>
            </div>
          </A>
        ))}
    </div>
  );
}
