import { createSignal, onMount, Show } from "solid-js";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { LoggingLayout } from "../LoggingLayout";
import toast from "solid-toast";
import {
  IntegratedTable,
  ITableColumn,
} from "../../../components/integrated-table/IntegratedTable";
import { A } from "@solidjs/router";
import { IMAGER_BASE_URL } from "../../../App.const";
import {
  adminUserPublicMessageLogService,
  AdminUserPublicMessageLogWire,
} from "@crabshell/admin-client";

export function RoomChatLogsScreen() {
  const [logs, setLogs] = createSignal<AdminUserPublicMessageLogWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminUserPublicMessageLogService.getAll();
      setLogs(response);
    } catch (e) {
      toast.error("Failed to fetch public chat logs");
      console.error(e);
    }
  });

  const columns: ITableColumn<AdminUserPublicMessageLogWire>[] = [
    {
      key: "userID",
      header: "User",
      selector: (row: AdminUserPublicMessageLogWire) => row.user.username,
      customRender: (_: number, row: AdminUserPublicMessageLogWire) => (
        <A
          href={`/users/${row.user.username}`}
          onClick={(e) => e.stopPropagation()}
          style="display:flex;gap:8px;align-items:center;"
        >
          <img
            class="avatar"
            src={`${IMAGER_BASE_URL}?figure=${row.user.look}&headonly=1`}
            style="object-fit: contain; height: 65px"
          />
          <p>{row.user.username}</p>
        </A>
      ),
      sortable: true,
      filterable: true,
      width: 200,
    },
    {
      key: "message",
      header: "Message",
      selector: (row: AdminUserPublicMessageLogWire) => row.message,
      sortable: false,
      filterable: true,
      width: 400,
    },
    {
      key: "sentToUserID",
      header: "Whispered To User",
      selector: (row: AdminUserPublicMessageLogWire) =>
        row.sentToUser?.username ?? row.sentToUserID,
      customRender: (_: number, row: AdminUserPublicMessageLogWire) => (
        <Show when={!!row.sentToUser} fallback="-">
          <A
            href={`/users/${row.sentToUser?.username}`}
            onClick={(e) => e.stopPropagation()}
            style="display:flex;gap:8px;align-items:center;"
          >
            <img
              class="avatar"
              src={`${IMAGER_BASE_URL}?figure=${row.sentToUser?.look}&headonly=1`}
              style="object-fit: contain; height: 65px"
            />
            <p>{row.sentToUser?.username}</p>
          </A>
        </Show>
      ),
      sortable: true,
      filterable: true,
      width: 200,
    },
    {
      key: "roomID",
      header: "Room",
      selector: (row: AdminUserPublicMessageLogWire) => row.roomID,
      sortable: true,
      filterable: true,
      width: 200,
    },
    {
      key: "timestamp",
      header: "Timestamp",
      selector: (row: AdminUserPublicMessageLogWire) =>
        new Date(row.timestamp * 1000).toISOString(),
      sortable: true,
      filterable: true,
      width: 200,
    },
  ];

  return (
    <LoggingLayout>
      <SiteTitle>Public Chat Logs</SiteTitle>
      <h1>Public Chat Logs</h1>
      <IntegratedTable
        columns={columns}
        rows={logs}
        getRowId={(row: AdminUserPublicMessageLogWire) => `${row.id}`}
      />
    </LoggingLayout>
  );
}

export default RoomChatLogsScreen;
