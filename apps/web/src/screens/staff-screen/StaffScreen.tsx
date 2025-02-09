import { createSignal, onMount, type Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { ranksService, RankWire } from "@crabshell/public-client";
import { IMAGER_BASE_URL } from "../../App.const";

const StaffScreen: Component = () => {
  const [ranks, setRanks] = createSignal<RankWire[]>([]);

  onMount(async () => {
    const response = await ranksService.getStaff();
    setRanks(response);
  });

  return (
    <UserGuard>
      <SiteTitle>Staff</SiteTitle>
      <SiteSidebar />
      <main>
        <div class="staff-page main-content">
          <h1>Staff Team</h1>
          <div class="staff-roles">
            {ranks().map((rank) => (
              <div class="staff-role">
                <div class="role-header">
                  <img
                    class="badge"
                    src="https://swfs.habcrab.com/c_images/album1584/ADM.gif"
                    alt="Badge"
                  />
                  <h2>{rank.name}</h2>
                </div>
                <div class="role-members">
                  {rank.members.map((member) => (
                    <div class="staff-member">
                      <img
                        class="avatar"
                        src={`${IMAGER_BASE_URL}?figure=${member.look}&headonly=1`}
                        alt="Avatar"
                      />
                      <div class="member-info">
                        <h3>{member.username}</h3>
                        <p class="motto">{member.motto}</p>
                        <span
                          class={`online-indicator ${member.online ? "online" : "offline"}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </UserGuard>
  );
};

export default StaffScreen;
