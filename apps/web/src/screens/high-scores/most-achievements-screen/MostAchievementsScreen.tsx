import { Component, createSignal, onMount } from "solid-js";
import { HighScoresLayout } from "../HighScoresLayout";
import {
  HighScoresByAchievementsRow,
  highScoresService,
} from "@crabshell/client";

const MostAchievementsScreen: Component = () => {
  const [rows, setRows] = createSignal<HighScoresByAchievementsRow[]>([]);

  onMount(async () => {
    const response = await highScoresService.getByAchievements();
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
              <th>Achievements</th>
            </tr>
          </thead>
          <tbody>
            {rows().map((_, i) => (
              <tr>
                <td>#{i + 1}</td>
                <td>
                  <img
                    class="avatar"
                    src="{{imageURL}}?user=Chris&headonly=1"
                    style="object-fit: contain"
                  />
                </td>
                <td>{_.username}</td>
                <td>{_.achievements}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HighScoresLayout>
  );
};
export default MostAchievementsScreen;
