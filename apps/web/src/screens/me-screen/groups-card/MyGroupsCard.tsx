import { createMemo } from "solid-js";
import { useAuth } from "../../../context/AuthContext";
import { groupsService } from "@crabshell/client";
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
