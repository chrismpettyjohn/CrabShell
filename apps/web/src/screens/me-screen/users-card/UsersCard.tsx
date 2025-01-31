import { createSignal } from "solid-js";
import { TabBar } from "../../../components/tab-bar/TabBar";
import { usersService } from "@crabshell/client";
import { UsersListCard } from "./UserListCard";
import { useAuth } from "../../../context/AuthContext";

function MyFriendsCard() {
  const { user } = useAuth();

  const userData = user();

  if (!userData?.id) {
    return null;
  }

  return (
    <UsersListCard getUsers={() => usersService.getFriends(userData.id)} />
  );
}

const tabs = [
  {
    label: "Newest",
    view: () => <UsersListCard getUsers={usersService.getNewestUsers} />,
  },
  {
    label: "Online",
    view: () => <UsersListCard getUsers={usersService.getOnlineUsers} />,
  },
  {
    label: "My Friends",
    view: () => <MyFriendsCard />,
  },
];

export function UsersCard() {
  const [tab, setTab] = createSignal(tabs[0]);

  return (
    <div class="card">
      <h2>Users</h2>
      <TabBar tabs={tabs} activeTab={tab} setTab={setTab} />
    </div>
  );
}
