import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";

export function UsersRoomsScreen() {
  const { userId } = useParams();
  return (
    <UsersLayout userId={Number(userId)}>
      <p>rooms</p>
    </UsersLayout>
  );
}

export default UsersRoomsScreen;
