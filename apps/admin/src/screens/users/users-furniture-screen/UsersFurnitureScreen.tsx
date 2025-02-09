import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";
import { SiteTitle } from "@crabshell/shared-web";

export function UsersFurnitureScreen() {
  const { username } = useParams();
  return (
    <UsersLayout username={username}>
      <SiteTitle>User Furniture</SiteTitle>
      <h1>Furniture</h1>
      <p>furniture</p>
    </UsersLayout>
  );
}

export default UsersFurnitureScreen;
