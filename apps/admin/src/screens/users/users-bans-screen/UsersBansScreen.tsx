import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";
import { SiteTitle } from "../../../components/site-title/SiteTitle";

export function UsersBansScreen() {
  const { username } = useParams();
  return (
    <UsersLayout username={username}>
      <SiteTitle>User Bans</SiteTitle>
      <h1>Bans</h1>
    </UsersLayout>
  );
}

export default UsersBansScreen;
