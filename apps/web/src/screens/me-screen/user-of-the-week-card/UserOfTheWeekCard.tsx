import { usersService, UserWire } from "@crabshell/client";
import { createSignal, onMount } from "solid-js";
import {
  IMAGER_BASE_URL,
  USER_OF_THE_WEEK_ID,
  USER_OF_THE_WEEK_TEXT,
} from "../../../App.const";

export function UserOfTheWeekCard() {
  const [userOfTheWeek, setUserOfTheWeek] = createSignal<UserWire>();

  onMount(async () => {
    const user = await usersService.getById(USER_OF_THE_WEEK_ID);
    setUserOfTheWeek(user);
  });

  const uotw = userOfTheWeek();

  return (
    <div
      class="card"
      style="display:flex;height:fit-content;justify-content: center;"
    >
      <div class="user-week-container">
        <div class="congrats">Congratulations!</div>
        <h2>User of the Week</h2>
        <div class="podium-container">
          <div class="user-avatar">
            <img
              src={`${IMAGER_BASE_URL}?figure=${userOfTheWeek()?.look}&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif`}
              alt="User Avatar"
            />
          </div>
        </div>
        <div class="user-name">{userOfTheWeek()?.username}</div>
        <div class="user-rank">{USER_OF_THE_WEEK_TEXT}</div>
      </div>
    </div>
  );
}
