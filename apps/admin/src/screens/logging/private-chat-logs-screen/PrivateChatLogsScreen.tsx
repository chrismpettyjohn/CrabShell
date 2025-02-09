import { createSignal, onMount } from "solid-js";
import { LoggingLayout } from "../LoggingLayout";
import toast from "solid-toast";
import {
  SiteTitle,
  IntegratedTable,
  ITableColumn,
} from "@crabshell/shared-web";
import { A } from "@solidjs/router";
import { IMAGER_BASE_URL } from "../../../App.const";
import {
  adminUserPrivateMessageLogService,
  AdminUserPrivateMessageLogWire,
} from "@crabshell/admin-client";

export function PrivateChatLogsScreen() {
  const [logs, setLogs] = createSignal<AdminUserPrivateMessageLogWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminUserPrivateMessageLogService.getAll();
      setLogs(response);
    } catch (e) {
      toast.error("Failed to fetch private chat logs");
      console.error(e);
    }
  });

  const columns: ITableColumn<AdminUserPrivateMessageLogWire>[] = [
    {
      key: "userID",
      header: "User",
      selector: (row: AdminUserPrivateMessageLogWire) => row.user.username,
      customRender: (_: number, row: AdminUserPrivateMessageLogWire) => (
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
    },
    {
      key: "sentToUserID",
      header: "Receiving User",
      selector: (row: AdminUserPrivateMessageLogWire) =>
        row.sentToUser.username,
      sortable: true,
      filterable: true,
    },
    {
      key: "message",
      header: "Message",
      selector: (row: AdminUserPrivateMessageLogWire) => row.message,
      sortable: false,
      filterable: true,
    },
    {
      key: "timestamp",
      header: "Timestamp",
      selector: (row: AdminUserPrivateMessageLogWire) =>
        new Date(row.timestamp * 1000).toISOString(),
      sortable: true,
      filterable: true,
    },
  ];

  return (
    <LoggingLayout>
      <SiteTitle>Private Chat Logs</SiteTitle>
      <h1>Private Chat Logs</h1>
      <IntegratedTable
        columns={columns}
        rows={logs}
        getRowId={(row: AdminUserPrivateMessageLogWire) => `${row.id}`}
      />
    </LoggingLayout>
  );
}

export default PrivateChatLogsScreen;
