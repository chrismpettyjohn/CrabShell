import { A } from "@solidjs/router";
import { useOnlineUsers } from "../../../context/OnlineUsersContext";

export function EnterHotelButton() {
  const { onlineUsers } = useOnlineUsers();
  return (
    <A href="/play">
      <button class="enter-hotel-btn">
        {onlineUsers().length} users online
      </button>
    </A>
  );
}
