import { SiteTitle } from "@crabshell/shared-web";
import { UserLayout } from "../../../components/user-layout/UserLayout";

export function CatalogItemsListScreen() {
  return (
    <UserLayout>
      <SiteTitle>Catalog Items</SiteTitle>
      <h1>Catalog Items</h1>
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
    </UserLayout>
  );
}

export default CatalogItemsListScreen;
