import { createMemo } from "solid-js";
import { useAuth } from "@crabshell/shared-web";
import { groupsService } from "@crabshell/public-client";
import { GroupsListCard } from "./GroupsListCard";

export function MyGroupsCard() {
  const { user } = useAuth();

  const userInfo = user();

  if (!userInfo?.id) {
    return null;
  }

  const getFriends = createMemo(
    () => () => groupsService.getGroupsByUserId(userInfo.id)
  );

  return <GroupsListCard getGroups={getFriends()} />;
}
