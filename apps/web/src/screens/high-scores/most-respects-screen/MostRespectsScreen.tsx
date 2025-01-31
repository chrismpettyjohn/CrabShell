import { Component, createSignal, onMount } from "solid-js";
import { HighScoresLayout } from "../HighScoresLayout";
import {
  HighScoresByRespectsReceivedRow,
  highScoresService,
} from "@crabshell/client";

const MostRespectsScreen: Component = () => {
  const [rows, setRows] = createSignal<HighScoresByRespectsReceivedRow[]>([]);

  onMount(async () => {
    const response = await highScoresService.getByRespectReceived();
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
              <th>Respects Received</th>
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
                <td>{_.respectsReceived}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HighScoresLayout>
  );
};
export default MostRespectsScreen;
