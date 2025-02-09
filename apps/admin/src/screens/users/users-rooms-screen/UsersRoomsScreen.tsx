import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";

export function UsersRoomsScreen() {
  const { username } = useParams();
  return (
    <UsersLayout username={username}>
      <p>rooms</p>
    </UsersLayout>
  );
}

export default UsersRoomsScreen;
