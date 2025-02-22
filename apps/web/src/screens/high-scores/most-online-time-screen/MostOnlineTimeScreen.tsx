import { Component, createSignal, onMount } from "solid-js";
import { HighScoresLayout } from "../HighScoresLayout";
import { HighScoresByOnlineTimeRow, highScoresService } from "@crabshell/public-client";
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
                    <img class="avatar" src={`${IMAGER_BASE_URL}?figure=${_.look}&size=l`} alt="Avatar" style="object-fit:cover;cursor:pointer;" />
                  </A>
                </td>
                <td>
                  <A href={`/profile/${_.username}`} style={{ color: "white" }}>
                    {_.username}
                  </A>
                </td>
                <td>
                  {_.onlineTime / 3600 >= 48
                    ? parseInt(`${_.onlineTime / 86400}`).toLocaleString() + " days"
                    : _.onlineTime / 3600 >= 2
                      ? parseInt(`${_.onlineTime / 3600}`).toLocaleString() + " hours"
                      : parseInt(`${_.onlineTime / 60}`).toLocaleString() + " minutes"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HighScoresLayout>
  );
};
export default MostOnlineTimesScreen;
