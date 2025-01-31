import { createSignal, onMount } from "solid-js";
import { useAuth } from "../../../context/AuthContext";
import {
  achievementsService,
  badgesService,
  usersService,
} from "@crabshell/client";
import { IMAGER_BASE_URL } from "../../../App.const";

interface UserAreaState {
  friendCount: number;
  badgeCount: number;
  achievementCount: number;
}

export function UserArea() {
  const { user } = useAuth();
  const [state, setState] = createSignal<UserAreaState>({
    friendCount: 0,
    badgeCount: 0,
    achievementCount: 0,
  });

  const userID = user()?.id;

  if (!userID) {
    return null;
  }

  onMount(async () => {
    const [friends, badges, achievements] = await Promise.all([
      usersService.getFriends(userID),
      badgesService.getBadgesByUserId(userID),
      achievementsService.getAchievementsByUserId(userID),
    ]);
    setState({
      friendCount: friends.length,
      badgeCount: badges.length,
      achievementCount: achievements.length,
    });
  });

  return (
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
          <h3>{state().badgeCount}</h3>
          <p>Badges</p>
        </div>
        <div class="stat-block">
          <h3>{state().friendCount}</h3>
          <p>Friends</p>
        </div>
        <div class="stat-block">
          <h3>{state().achievementCount}</h3>
          <p>Achievements</p>
        </div>
      </div>
    </div>
  );
}
