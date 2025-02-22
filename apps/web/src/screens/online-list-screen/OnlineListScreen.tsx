import { Show, type Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { useOnlineUsers } from "../../context/OnlineUsersContext";
import { A } from "@solidjs/router";
import { IMAGER_BASE_URL } from "../../App.const";

const OnlineListScreen: Component = () => {
  const { onlineUsers } = useOnlineUsers();

  return (
    <UserGuard>
      <SiteTitle>Online</SiteTitle>
      <SiteSidebar />
      <main>
        <div class="high-scores-page main-content">
          <h2>Online</h2>
          <div class="scores-table active">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Avatar</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {onlineUsers().map((_, i) => (
                  <tr>
                    <td>#{i + 1}</td>
                    <td>
                      <A href={`/profile/${_.username}`}>
                        <img class="avatar" src={`${IMAGER_BASE_URL}?figure=${_.look}&size=l`} alt="Avatar" style="object-fit:cover;cursor:pointer;" />
                      </A>
                    </td>
                    <td>
                      <A href={`/profile/${_.username}`} style={{ color: "white" }}>
                        {_.username}
                      </A>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </UserGuard>
  );
};

export default OnlineListScreen;
