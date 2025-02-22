import { createSignal } from "solid-js";
import { ProfileScreenProps } from "../ProfileScreen.types";
import { GroupWire } from "@crabshell/public-client";
import { A } from "@solidjs/router";

export function MyGroupsCard({ user: profile }: ProfileScreenProps) {
  const [groups, setGroups] = createSignal<GroupWire[]>([]);
  return (
    <div class="card">
      <h2>Groups ({groups().length})</h2>
      <div class="users-list">
        {groups()
          .slice(0, 5)
          .map((_) => (
            <A href={`/groups/${_.id}`}>
              <div class="row">
                <div class="avatar-container">
                  <img
                    class="avatar"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAghJREFUWEftmL1RxDAQhdeFkEBGB+TM0AElQBvXBpQAFTBDTgIhZJBQiJmV7929Wa9k6WxZDlBw4z9Zn57e7srXybH1dNz6sFOA8CMiff+Fw9ZcIt1l0KlTogD28yvy+tYe7PpK5PxsADzAPT6J4EYrRAh0d+vA6UV9oFVTxVSkIjjtBGg9tm2pCRXDrQWmEy6CWxOsCG5tsGy4FmDZcDB8yvwXN/kF5fslneAhRtRzGnElii0FBwF4fDcJI8/lKFZS7vblSKyCPA7gRnkOnVhezmWcx6AYSl5OwkYfhrNg9j3aJ5SvqRlpR4bygDDzWILWun2/G3zKqvPE2VYjOKtcTDGV3jbU5dg9D46rjvV8Es6WJF4aHgiQUD92z8LZcuiN5y6rt2xLwrHHMdam4GxGaAanAaBe9AIiWzn1hRp7alm9CuJtm1idHDgefxQQpXA5OQ7PxFIJK5eESw2GgHjYDXVSFbbfHPaaPa+2rAAH5PtzJx+fRx8pNGAAYZ9JlTx8P8BWRcv6D0cBeVCOlyQWrVY5eA9LiHN9zl5Lec0LCARPqBAlcBYyJ2JztlfsuU3BIUcilcyG8/Zj3iZ1SlnejSwCVwNMJzEbrhbYbLiaYLPgaoPNgpsy9hL3k54D/RIDnfIOFAA3lfALY59up6aLEliG036hSmyl7ctd+E8YLf/Pj/qzCFx/bwB4I3c7uW0AAAAASUVORK5CYII="
                  />
                </div>
                <div class="avatar-info">
                  <h4>{_.name}</h4>
                  <p>{_.users.length} members</p>
                </div>
              </div>
            </A>
          ))}
      </div>
    </div>
  );
}
