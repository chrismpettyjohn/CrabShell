import { usersService } from "@crabshell/client";
import { A } from "@solidjs/router";
import { createSignal, onMount, onCleanup } from "solid-js";

export function EnterHotelButton() {
  const [usersOnline, setUsersOnline] = createSignal(0);

  onMount(async () => {
    const onlineUsers = await usersService.getOnlineUsers();
    setUsersOnline(onlineUsers.length);
  });

  return (
    <A href="/play">
      <button class="enter-hotel-btn">
        <b>{usersOnline()}</b>&nbsp;users online
      </button>
    </A>
  );
}
