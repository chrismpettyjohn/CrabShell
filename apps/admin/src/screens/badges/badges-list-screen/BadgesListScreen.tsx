import { A, useNavigate } from "@solidjs/router";
import { BADGE_BASE_URL, BADGE_EXT } from "../../../App.const";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { createSignal, onMount } from "solid-js";
import { adminBadgeService, AdminBadgeWire } from "@crabshell/admin-client";
import toast from "solid-toast";

export function BadgesListScreen() {
  const navigate = useNavigate();
  const [badges, setBadges] = createSignal<AdminBadgeWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminBadgeService.getAll();
      setBadges(response);
    } catch (e: any) {
      toast.error("Failed to fetch badges");
      throw e;
    }
  });

  return (
    <UserLayout>
      <div style="display:flex;justify-content:flex-end;margin-bottom:14px;width:100%;">
        <A href="/badges/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Badge</th>
            <th>Code</th>
            <th>Public Name</th>
          </tr>
        </thead>
        <tbody>
          {badges().map((_) => (
            <tr onClick={() => navigate(`/badges/${_.code}`)}>
              <td>
                <img src={`${BADGE_BASE_URL}/${_.code}${BADGE_EXT}`} />
              </td>
              <td>{_.code}</td>
              <td>{_.publicName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </UserLayout>
  );
}

export default BadgesListScreen;
