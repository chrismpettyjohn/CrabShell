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
      console.log("Loaded badges:", response);
      setBadges(response);
    } catch (e) {
      toast.error("Failed to fetch badges");
      console.error(e);
    }
  });

  const columns: ITableColumn<AdminBadgeWire>[] = [
    {
      key: "code",
      header: "Badge",
      selector: (row) => row.code,
      customRender: (code) => (
        <A href={`/badges/${code}`} onClick={(e) => e.stopPropagation()}>
          <img
            src={`${BADGE_BASE_URL}/${code}${BADGE_EXT}`}
            alt="Badge"
            style="object-fit: contain; height: 50px;"
          />
        </A>
      ),
      width: 100,
    },
    {
      key: "code",
      header: "Code",
      selector: (row) => row.code,
      customRender: (code: string, row: AdminBadgeWire) => (
        <A href={`/badges/${row.code}`} onClick={(e) => e.stopPropagation()}>
          {code}
        </A>
      ),
      filterable: true,
      sortable: true,
    },
    {
      key: "publicName",
      header: "Public Name",
      selector: (row) => row.publicName,
      filterable: true,
      sortable: true,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Badges</SiteTitle>
      <div style="display:flex;justify-content:space-between;margin-bottom:14px;width:100%;">
        <h1>Badges</h1>
        <A href="/badges/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <div class="card">
        <IntegratedTable
          columns={columns}
          rows={badges}
          getRowId={(row) => row.code}
          onRowClick={(row) => navigate(`/badges/${row.code}`)}
        />
      </div>
    </UserLayout>
  );
}

export default BadgesListScreen;
