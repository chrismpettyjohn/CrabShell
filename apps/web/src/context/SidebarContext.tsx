import {
  achievementsService,
  badgesService,
  usersService,
} from "@crabshell/public-client";
import {
  createContext,
  useContext,
  createSignal,
  createEffect,
  type Component,
  type JSX,
} from "solid-js";
import { useAuth } from "@crabshell/shared-web";

interface SidebarContextValue {
  achievementCount(): number;
  badgeCount(): number;
  friendCount(): number;
}

const SidebarContext = createContext<SidebarContextValue>();

export const SidebarProvider: Component<{ children: JSX.Element }> = (
  props
) => {
  const { user } = useAuth();
  const [achievementCount, setAchievementCount] = createSignal(0);
  const [badgeCount, setBadgeCount] = createSignal(0);
  const [friendCount, setFriendCount] = createSignal(0);

  createEffect(async () => {
    const userId = user()?.id;
    if (!userId) return;
    const [achievements, badges, friends] = await Promise.all([
      achievementsService.getAchievementsByUserId(userId),
      badgesService.getBadgesByUserId(userId),
      usersService.getFriends(userId),
    ]);
    setAchievementCount(achievements.length);
    setBadgeCount(badges.length);
    setFriendCount(friends.length);
  });

  return (
    <SidebarContext.Provider
      value={{ achievementCount, badgeCount, friendCount }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within an SidebarProvider");
  }
  return context;
}
