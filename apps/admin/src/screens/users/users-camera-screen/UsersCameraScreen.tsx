import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";
import { SiteTitle } from "@crabshell/shared-web";

export function UsersCameraScreen() {
  const { username } = useParams();
  return (
    <UsersLayout username={username}>
      <SiteTitle>User Camera</SiteTitle>
      <h1>Camera</h1>
      <p>camera</p>
    </UsersLayout>
  );
}

export default UsersCameraScreen;
