import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";

export function UsersSessionsScreen() {
  const { username } = useParams();
  return (
    <UsersLayout username={username}>
      <p>bans</p>
    </UsersLayout>
  );
}

export default UsersSessionsScreen;
