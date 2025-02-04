import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";

export function UsersMessagesScreen() {
  const { userId } = useParams();
  return (
    <UsersLayout userId={Number(userId)}>
      <p>messages</p>
    </UsersLayout>
  );
}

export default UsersMessagesScreen;
