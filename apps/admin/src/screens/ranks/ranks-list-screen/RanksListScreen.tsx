import { createSignal, onMount } from "solid-js";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { adminRankService, AdminRankWire } from "@crabshell/admin-client";
import { A, useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import { BADGE_BASE_URL, BADGE_EXT, IMAGER_BASE_URL } from "../../../App.const";
import { UserLayout } from "../../../components/user-layout/UserLayout";

export function RanksListScreen() {
  const navigate = useNavigate();
  const [ranks, setRanks] = createSignal<AdminRankWire[]>([]);
  onMount(async () => {
    try {
      const response = await adminRankService.getAll();
      setRanks(response);
    } catch (e: any) {
      toast.error("Failed to fetch ranks");
      throw e;
    }
  });

  return (
    <UserLayout>
      <SiteTitle>Ranks</SiteTitle>
      <div style="display:flex;justify-content:flex-end;margin-bottom:14px;width:100%;">
        <A href="/ranks/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Badge</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {ranks().map((_, i) => (
            <tr onClick={() => navigate(`/ranks/${_.id}`)}>
              <td>{_.id}</td>
              <td>
                <img
                  src={`${BADGE_BASE_URL}/${_.badgeCode}${BADGE_EXT}`}
                  style="object-fit: contain; height: 45px;"
                />
              </td>
              <td>{_.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </UserLayout>
  );
}

export default RanksListScreen;
