import { useAuth } from "@crabshell/shared-web";
import { IMAGER_BASE_URL } from "../../../App.const";
import { A } from "@solidjs/router";

export function UserContainer() {
  const { user } = useAuth();
  console.log(user());
  return (
    <div class="user-container">
      <div>
        <div class="user-container__user-banner">
          <A href="/play" class="user-container__enter-hotel-link">
            <img src="/img/enter-hotel.gif" alt="Enter Hotel" />
          </A>
        </div>

        <div class="user-container__user-info">
          <A
            href={`/profile/${user()?.username}`}
            class="user-container__profile-link"
          >
            <img
              class="user-container__profile-image"
              src={`${IMAGER_BASE_URL}?figure=${user()?.look}1&direction=&head_direction=&action=&gesture=&size=m&headonly=0`}
            />
            <img
              src="/img/plate.png"
              alt="Stand"
              class="user-container__stand-image"
            />
          </A>
          <div class="user-container__motto-container">
            <div class="user-container__motto-content">
              <b>{user()?.username}</b>
              <div style="display:flex;gap:4px;flex:1;justify-content:flex-end;">
                <img src="/img/crab.png" style="height:24px;" />
                <input
                  type="text"
                  name="motto"
                  class="user-container__motto-input"
                  value={user()?.motto}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
