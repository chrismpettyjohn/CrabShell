import { A, useNavigate } from "@solidjs/router";
import { BADGE_BASE_URL, BADGE_EXT } from "../../../App.const";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { createSignal, onMount } from "solid-js";
import { adminBadgeService, AdminBadgeWire } from "@crabshell/admin-client";
import toast from "solid-toast";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import {
  IntegratedTable,
  ITableColumn,
} from "../../../components/integrated-table/IntegratedTable";

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

  const columns: ITableColumn<AdminBadgeWire>[] = [
    {
      header: "Badge",
      selector: (row) => row.code,
      customRender: (code) => (
        <img src={`${BADGE_BASE_URL}/${code}${BADGE_EXT}`} alt="Badge" />
      ),
      width: 100,
    },
    {
      header: "Code",
      selector: (row) => row.code,
      sortable: true,
    },
    {
      header: "Public Name",
      selector: (row) => row.publicName,
      sortable: true,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Badges</SiteTitle>
      <div style="display:flex;justify-content:flex-end;margin-bottom:14px;width:100%;">
        <A href="/badges/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <IntegratedTable
        columns={columns}
        rows={badges}
        onRowClick={(row) => navigate(`/badges/${row.code}`)}
      />
    </UserLayout>
  );
}

export default BadgesListScreen;
