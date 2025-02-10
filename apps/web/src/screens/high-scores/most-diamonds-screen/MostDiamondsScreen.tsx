import { Component, createSignal, onMount } from "solid-js";
import { HighScoresLayout } from "../HighScoresLayout";
import {
  HighScoresByDiamondsRow,
  highScoresService,
} from "@crabshell/public-client";
import { IMAGER_BASE_URL } from "../../../App.const";
import { A } from "@solidjs/router";

const MostDiamondsScreen: Component = () => {
  const [rows, setRows] = createSignal<HighScoresByDiamondsRow[]>([]);

  onMount(async () => {
    const response = await highScoresService.getByDiamonds();
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
              <th>Diamonds</th>
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
                <td>{_.diamonds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HighScoresLayout>
  );
};
export default MostDiamondsScreen;
