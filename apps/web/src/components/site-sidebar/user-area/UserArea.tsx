import { useAuth } from "@crabshell/shared-web";
import { IMAGER_BASE_URL } from "../../../App.const";
import { useSidebar } from "../../../context/SidebarContext";
import { Show } from "solid-js";

export function UserArea() {
  const { user } = useAuth();
  const { achievementCount, badgeCount, friendCount } = useSidebar();

  return (
    <Show when={!!user()}>
      <div class="user-area">
        <div class="avatar-container">
          <img
            class="avatar"
            src={`${IMAGER_BASE_URL}?figure=${user()?.look}&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif`}
          />
        </div>
        <h2>{user()?.username}</h2>
        <div class="quick-stats">
          <div class="stat-block">
            <h3>{badgeCount()}</h3>
            <p>Badges</p>
          </div>
          <div class="stat-block">
            <h3>{friendCount()}</h3>
            <p>Friends</p>
          </div>
          <div class="stat-block">
            <h3>{achievementCount()}</h3>
            <p>Achievements</p>
          </div>
        </div>
      </div>
    </Show>
  );
}
