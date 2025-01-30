import { createSignal } from "solid-js";
import { TabBar } from "../../../components/tab-bar/TabBar";

const tabs = [
  {
    label: "Newest",
    view: () => (
      <div class="users-list">
        <div class="row">
          <div class="avatar-container">
            <img
              class="avatar"
              src="{{imageURL}}?user=Chris&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
            />
          </div>
          <div class="avatar-info">
            <h4>LeChris</h4>
            <img src="https://i.imgur.com/6Dq8uGr.png" class="status" />
            <p>i eat oysters and have 10 legs</p>
          </div>
        </div>
        <div class="row">
          <div class="avatar-container">
            <img
              class="avatar"
              src="{{imageURL}}?user=Tre&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
            />
          </div>
          <div class="avatar-info">
            <h4>Tre</h4>
            <img src="https://i.imgur.com/6Dq8uGr.png" class="status" />
            <p>big crustaceans turn me on</p>
          </div>
        </div>
        <div class="row">
          <div class="avatar-container">
            <img
              class="avatar"
              src="{{imageURL}}?user=angel&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
            />
          </div>
          <div class="avatar-info">
            <h4>angel</h4>
            <img src="https://i.imgur.com/6Dq8uGr.png" class="status" />
            <p>big crustaceans turn me on</p>
          </div>
        </div>
        <div class="row">
          <div class="avatar-container">
            <img
              class="avatar"
              src="{{imageURL}}?user=Crab&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
            />
          </div>
          <div class="avatar-info">
            <h4>Crab</h4>
            <img src="https://i.imgur.com/6Dq8uGr.png" class="status" />
            <p>big crustaceans turn me on</p>
          </div>
        </div>
        <div class="row">
          <div class="avatar-container">
            <img
              class="avatar"
              src="{{imageURL}}?user=Lobster&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
            />
          </div>
          <div class="avatar-info">
            <h4>Lobster</h4>
            <img src="https://i.imgur.com/6Dq8uGr.png" class="status" />
            <p>big crustaceans turn me on</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Online",
    view: () => <p>online</p>,
  },
  {
    label: "My Friends",
    view: () => <p>mu friends</p>,
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
