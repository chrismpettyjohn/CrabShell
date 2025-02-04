import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { LoggingLayout } from "../LoggingLayout";

export function RoomTradeLogsScreen() {
  return (
    <LoggingLayout>
      <SiteTitle>Room Trade Logs</SiteTitle>
      <h2>Room Trade Logs</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Initiating User</th>
            <th>Initiating User Items</th>
            <th>Receiving User</th>
            <th>Receiving User Items</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <tr>
              <td>User {i + 1}</td>
              <td>Item {i + 1}</td>
              <td>User {i + 1}</td>
              <td>Item {i + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </LoggingLayout>
  );
}

export default RoomTradeLogsScreen;
