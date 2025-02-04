import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";

export function UsersFurnitureScreen() {
  const { userId } = useParams();
  return (
    <UsersLayout userId={Number(userId)}>
      <p>furniture</p>
    </UsersLayout>
  );
}

export default UsersFurnitureScreen;
