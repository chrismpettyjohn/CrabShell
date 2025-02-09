import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";

export function UsersBansScreen() {
  const { username } = useParams();
  return (
    <UsersLayout username={username}>
      <p>bans</p>
    </UsersLayout>
  );
}

export default UsersBansScreen;
