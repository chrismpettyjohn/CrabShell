import { createSignal } from "solid-js";
import { TabBar } from "../../../components/tab-bar/TabBar";
import { usersService } from "@crabshell/public-client";
import { UsersListCard } from "./UserListCard";
import { MyFriendsCard } from "./MyFriendsCard";

const tabs = [
  {
    label: "Newest",
    view: () => <UsersListCard getUsers={usersService.getNewestUsers} />,
  },
  {
    label: "Online",
    view: () => <UsersListCard getUsers={usersService.getOnlineUsers} />,
  },
  { label: "My Friends", view: () => <MyFriendsCard /> },
];

export function UsersCard() {
  const [tabIndex, setTabIndex] = createSignal(0); // Reactive signal for tab index

  return (
    <div class="card">
      <h2>Users</h2>
      <TabBar tabs={tabs} activeTab={tabIndex} setTab={setTabIndex} />
      <div class="tab-content">{tabs[tabIndex()].view()}</div>{" "}
      {/* Render active tab's content */}
    </div>
  );
}
