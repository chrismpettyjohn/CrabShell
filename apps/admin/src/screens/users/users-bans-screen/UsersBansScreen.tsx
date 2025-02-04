import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";

export function UsersBansScreen() {
  const { userId } = useParams();
  return (
    <UsersLayout userId={Number(userId)}>
      <p>bans</p>
    </UsersLayout>
  );
}

export default UsersBansScreen;
