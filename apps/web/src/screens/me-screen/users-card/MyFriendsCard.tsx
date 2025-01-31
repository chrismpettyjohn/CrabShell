import { createMemo } from "solid-js";
import { useAuth } from "../../../context/AuthContext";
import { usersService } from "@crabshell/client";
import { UsersListCard } from "./UserListCard";

export function MyFriendsCard() {
  const { user } = useAuth();
  const userData = user();

  if (!userData?.id) {
    return null;
  }

  const getFriends = createMemo(
    () => () => usersService.getFriends(userData.id)
  );

  return <UsersListCard getUsers={getFriends()} />;
}
