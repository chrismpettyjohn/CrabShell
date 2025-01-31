import { usersService } from "@crabshell/client";
import { createSignal, onMount } from "solid-js";

export function UserCount() {
  const [online, setOnline] = createSignal(0);
  onMount(async () => {
    const response = await usersService.getOnlineUsers();
    setOnline(response.length);
  });
  return <>{online()}</>;
}
