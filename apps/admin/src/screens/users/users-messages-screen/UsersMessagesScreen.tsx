import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";

export function UsersMessagesScreen() {
  const { username } = useParams();
  return (
    <UsersLayout username={username}>
      <p>messages</p>
    </UsersLayout>
  );
}

export default UsersMessagesScreen;
