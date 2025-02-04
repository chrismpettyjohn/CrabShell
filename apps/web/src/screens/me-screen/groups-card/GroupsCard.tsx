import { createSignal } from "solid-js";
import { TabBar } from "../../../components/tab-bar/TabBar";
import { groupsService } from "@crabshell/public-client";
import { MyGroupsCard } from "./MyGroupsCard";
import { GroupsListCard } from "./GroupsListCard";

const tabs = [
  {
    label: "Newest",
    view: () => <GroupsListCard getGroups={groupsService.getNewestGroups} />,
  },
  {
    label: "Popular",
    view: () => <GroupsListCard getGroups={groupsService.getPopularGroups} />,
  },
  { label: "My Groups", view: () => <MyGroupsCard /> },
];

export function GroupsCard() {
  const [tabIndex, setTabIndex] = createSignal(0); // Reactive signal for tab index

  return (
    <div class="card">
      <h2>Groups</h2>
      <TabBar tabs={tabs} activeTab={tabIndex} setTab={setTabIndex} />
      <div class="tab-content">{tabs[tabIndex()].view()}</div>{" "}
    </div>
  );
}
