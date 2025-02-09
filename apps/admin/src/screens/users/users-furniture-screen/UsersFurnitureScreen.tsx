import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";

export function UsersFurnitureScreen() {
  const { username } = useParams();
  return (
    <UsersLayout username={username}>
      <p>furniture</p>
    </UsersLayout>
  );
}

export default UsersFurnitureScreen;
