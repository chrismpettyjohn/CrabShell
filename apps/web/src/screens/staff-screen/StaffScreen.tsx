import { createSignal, onMount, type Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { ranksService, RankWire } from "@crabshell/public-client";
import { BADGE_BASE_URL, IMAGER_BASE_URL } from "../../App.const";
import { A } from "@solidjs/router";

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
                    src={`${BADGE_BASE_URL}/${rank.badgeCode}.gif`}
                    alt="Badge"
                  />
                  <h2>{rank.name}</h2>
                </div>
                <div class="role-members">
                  {rank.members.map((member) => (
                    <div class="staff-member">
                      <A href={`/profile/${member.username}`}>
                        <img
                          class="avatar"
                          src={`${IMAGER_BASE_URL}?figure=${member.look}&size=l`}
                          alt="Avatar"
                          style="object-fit:cover;cursor:pointer;"
                        />
                      </A>
                      <div class="member-info">
                        <A
                          href={`/profile/${member.username}`}
                          style="text-decoration:none;"
                        >
                          <h3>{member.username}</h3>
                        </A>
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
