import { A } from "@solidjs/router";
import { BADGE_BASE_URL, BADGE_EXT } from "../../../App.const";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { createSignal, onMount } from "solid-js";
import { adminBanService, AdminBanWire } from "@crabshell/admin-client";
import toast from "solid-toast";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import {
  IntegratedTable,
  ITableColumn,
} from "../../../components/integrated-table/IntegratedTable";

export function BansListScreen() {
  const [bans, setBans] = createSignal<AdminBanWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminBanService.getAll();
      console.log("Loaded bans:", response);
      setBans(response);
    } catch (e) {
      toast.error("Failed to fetch bans");
      console.error(e);
    }
  });

  const columns: ITableColumn<AdminBanWire>[] = [
    {
      key: "id",
      header: "Ban",
      selector: (row) => row.id,
      customRender: (code) => (
        <A href={`/bans/${code}`} onClick={(e) => e.stopPropagation()}>
          <img
            src={`${BADGE_BASE_URL}/${code}${BADGE_EXT}`}
            alt="Ban"
            style="object-fit: contain; height: 50px;"
          />
        </A>
      ),
      width: 100,
    },
    {
      key: "userId",
      header: "Code",
      selector: (row) => row.userId,
      sortable: true,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Bans</SiteTitle>
      <div style="display:flex;justify-content:space-between;margin-bottom:14px;width:100%;">
        <h1>Bans</h1>
        <A href="/bans/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <div class="card">
        <IntegratedTable
          columns={columns}
          rows={bans}
          getRowId={(row) => `${row.id}`}
        />
      </div>
    </UserLayout>
  );
}

export default BansListScreen;
