import { A } from "@solidjs/router";
import { UserCount } from "../../user-count/UserCount";

export function EnterHotelButton() {
  return (
    <A href="/play">
      <button class="enter-hotel-btn">
        <UserCount /> users online
      </button>
    </A>
  );
}
