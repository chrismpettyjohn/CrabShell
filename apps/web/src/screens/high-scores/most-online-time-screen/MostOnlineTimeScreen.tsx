import { Component, createSignal, onMount } from "solid-js";
import { HighScoresLayout } from "../HighScoresLayout";
import {
  HighScoresByOnlineTimeRow,
  highScoresService,
} from "@crabshell/public-client";
import { IMAGER_BASE_URL } from "../../../App.const";
import { A } from "@solidjs/router";

const MostOnlineTimesScreen: Component = () => {
  const [rows, setRows] = createSignal<HighScoresByOnlineTimeRow[]>([]);

  onMount(async () => {
    const response = await highScoresService.getByOnlineTime();
    setRows(response.items);
  });

  return (
    <HighScoresLayout>
      <div class="scores-table active" id="credits">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Avatar</th>
              <th>Username</th>
              <th>Online Time</th>
            </tr>
          </thead>
          <tbody>
            {rows().map((_, i) => (
              <tr>
                <td>#{i + 1}</td>
                <td>
                  <A href={`/profile/${_.username}`}>
                    <img
                      class="avatar"
                      src={`${IMAGER_BASE_URL}?figure=${_.look}&size=l`}
                      alt="Avatar"
                      style="object-fit:cover;cursor:pointer;"
                    />
                  </A>
                </td>
                <td>{_.username}</td>
                <td>{_.onlineTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HighScoresLayout>
  );
};
export default MostOnlineTimesScreen;
