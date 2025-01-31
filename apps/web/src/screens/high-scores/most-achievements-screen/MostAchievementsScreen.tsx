import { Component } from "solid-js";
import { HighScoresLayout } from "../HighScoresLayout";

const MostAchievementsScreen: Component = () => {
  return (
    <HighScoresLayout>
      <div class="scores-table active" id="credits">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Avatar</th>
              <th>Username</th>
              <th>Credits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1</td>
              <td>
                <img
                  class="avatar"
                  src="{{imageURL}}?user=Chris&headonly=1"
                  style="object-fit: contain"
                />
              </td>
              <td>LeChris</td>
              <td>10,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </HighScoresLayout>
  );
};
export default MostAchievementsScreen;
