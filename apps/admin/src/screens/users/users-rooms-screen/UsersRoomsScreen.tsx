import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";
import { SiteTitle } from "@crabshell/shared-web";

export function UsersRoomsScreen() {
  const { username } = useParams();
  return (
    <UsersLayout username={username}>
      <SiteTitle>User Rooms</SiteTitle>
      <h1>Rooms</h1>
      <p>rooms</p>
    </UsersLayout>
  );
}

export default UsersRoomsScreen;
