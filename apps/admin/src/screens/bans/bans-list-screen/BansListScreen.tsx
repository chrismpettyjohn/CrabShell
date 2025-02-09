import { A } from "@solidjs/router";
import { BADGE_BASE_URL, BADGE_EXT, IMAGER_BASE_URL } from "../../../App.const";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { createSignal, onMount, Show } from "solid-js";
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
      key: "userId",
      header: "User",
      selector: (row) => row.user?.username ?? row.userId,
      customRender: (_: string, row: AdminBanWire) => (
        <A
          href={`/bans/${row.id}`}
          onClick={(e) => e.stopPropagation()}
          style="display:flex;align-items:center;"
        >
          <Show when={!!row.user} fallback={_}>
            <img
              class="avatar"
              src={`${IMAGER_BASE_URL}?figure=${row.user?.look}&headonly=1`}
              style="object-fit: contain; height: 65px"
            />
            {_}
          </Show>
        </A>
      ),
      sortable: true,
    },
    // {
    //   key: "ip",
    //   header: "IP Address",
    //   selector: (row) => row.ip,
    //   sortable: true,
    // },
    {
      key: "machineId",
      header: "Machine ID",
      selector: (row) => row.machineId,
      sortable: true,
    },
    {
      key: "userStaffId",
      header: "Staff ID",
      selector: (row) => row.userStaffId,
      sortable: true,
    },
    {
      key: "timestamp",
      header: "Timestamp",
      selector: (row) => new Date(row.timestamp * 1000).toLocaleString(),
      sortable: true,
    },
    {
      key: "banExpire",
      header: "Expires",
      selector: (row) =>
        row.banExpire
          ? new Date(row.banExpire * 1000).toLocaleString()
          : "Never",
      sortable: true,
    },
    {
      key: "banReason",
      header: "Reason",
      selector: (row) => row.banReason,
      sortable: true,
    },
    {
      key: "type",
      header: "Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      key: "cfhTopic",
      header: "CFH Topic",
      selector: (row) => row.cfhTopic,
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
