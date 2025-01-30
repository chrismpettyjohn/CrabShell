import { usersService } from "@crabshell/client";
import { A } from "@solidjs/router";
import { createSignal, onMount, onCleanup } from "solid-js";

export function EnterHotelButton() {
  const [usersOnline, setUsersOnline] = createSignal(0);

  onMount(() => {
    const updateUsers = async () => {
      const onlineUsers = await usersService.getOnlineUsers();
      setUsersOnline(onlineUsers.length);
    };

    updateUsers();
    const interval = setInterval(updateUsers, 15);

    onCleanup(() => clearInterval(interval));
  });

  return (
    <A href="/play">
      <button class="enter-hotel-btn">
        <b>{usersOnline()}</b>&nbsp;users online
      </button>
    </A>
  );
}
