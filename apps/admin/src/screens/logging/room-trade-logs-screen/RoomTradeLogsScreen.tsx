import { createSignal, onMount } from "solid-js";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { LoggingLayout } from "../LoggingLayout";
import toast from "solid-toast";
import {
  adminUserTradeLogService,
  AdminUserTradeLogWire,
} from "@crabshell/admin-client";
import {
  IntegratedTable,
  ITableColumn,
} from "../../../components/integrated-table/IntegratedTable";
import { A } from "@solidjs/router";
import { IMAGER_BASE_URL } from "../../../App.const";

export function RoomTradeLogsScreen() {
  const [logs, setLogs] = createSignal<AdminUserTradeLogWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminUserTradeLogService.getAll();
      setLogs(response);
    } catch (e) {
      toast.error("Failed to fetch room trade logs");
      console.error(e);
    }
  });

  const columns: ITableColumn<AdminUserTradeLogWire>[] = [
    {
      key: "userOne",
      header: "Initiating User",
      selector: (row: AdminUserTradeLogWire) => row.userOne.username,
      customRender: (_: number, row: AdminUserTradeLogWire) => (
        <A
          href={`/users/${row.userOne.username}`}
          onClick={(e) => e.stopPropagation()}
          style="display:flex;gap:8px;align-items:center;"
        >
          <img
            class="avatar"
            src={`${IMAGER_BASE_URL}?figure=${row.userOne.look}&headonly=1`}
            style="object-fit: contain; height: 65px"
          />
          <p>{row.userOne.username}</p>
        </A>
      ),
      sortable: true,
    },
    {
      key: "userOneitemCount",
      header: "Initiating User Items",
      selector: (row: AdminUserTradeLogWire) => row.userOneitemCount,
      sortable: false,
    },
    {
      key: "userTwo",
      header: "Receiving User",
      selector: (row: AdminUserTradeLogWire) => row.userTwo.username,
      customRender: (_: number, row: AdminUserTradeLogWire) => (
        <A
          href={`/users/${row.userTwo.username}`}
          onClick={(e) => e.stopPropagation()}
          style="display:flex;gap:8px;align-items:center;"
        >
          <img
            class="avatar"
            src={`${IMAGER_BASE_URL}?figure=${row.userTwo.look}&headonly=1`}
            style="object-fit: contain; height: 65px"
          />
          <p>{row.userTwo.username}</p>
        </A>
      ),
      sortable: true,
    },
    {
      key: "userTwoitemCount",
      header: "Receiving User Items",
      selector: (row: AdminUserTradeLogWire) => row.userTwoitemCount,
      sortable: false,
    },
    {
      key: "timestamp",
      header: "Timestamp",
      selector: (row: AdminUserTradeLogWire) =>
        new Date(row.timestamp * 1000).toISOString(),
      sortable: true,
    },
  ];

  return (
    <LoggingLayout>
      <SiteTitle>Room Trade Logs</SiteTitle>
      <h1>Room Trade Logs</h1>
      <IntegratedTable
        columns={columns}
        rows={logs}
        getRowId={(row: AdminUserTradeLogWire) => `${row.id}`}
      />
    </LoggingLayout>
  );
}

export default RoomTradeLogsScreen;
