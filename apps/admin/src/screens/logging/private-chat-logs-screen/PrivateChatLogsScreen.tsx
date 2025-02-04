import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { LoggingLayout } from "../LoggingLayout";

export function PrivateChatLogsScreen() {
  return (
    <LoggingLayout>
      <SiteTitle>Private Chat Logs</SiteTitle>
      <h1>Private Chat Logs</h1>
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

export default PrivateChatLogsScreen;
