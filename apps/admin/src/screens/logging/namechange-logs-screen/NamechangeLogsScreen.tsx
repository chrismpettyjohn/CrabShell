import { createSignal, onMount } from "solid-js";
import { LoggingLayout } from "../LoggingLayout";
import toast from "solid-toast";
import {
  adminUserNameChangeLogService,
  AdminUserNameChangeLogWire,
} from "@crabshell/admin-client";
import {
  SiteTitle,
  IntegratedTable,
  ITableColumn,
} from "@crabshell/shared-web";
import { A } from "@solidjs/router";
import { IMAGER_BASE_URL } from "../../../App.const";

export function NamechangeLogsScreen() {
  const [logs, setLogs] = createSignal<AdminUserNameChangeLogWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminUserNameChangeLogService.getAll();
      setLogs(response);
    } catch (e) {
      toast.error("Failed to fetch name change logs");
      console.error(e);
    }
  });

  const columns: ITableColumn<AdminUserNameChangeLogWire>[] = [
    {
      key: "userID",
      header: "User",
      selector: (row) => row.user.username,
      customRender: (_: number, row: AdminUserNameChangeLogWire) => (
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
      key: "newName",
      header: "New Username",
      selector: (row) => row.newName,
      customRender: (newName: string, row: AdminUserNameChangeLogWire) => (
        <div style="display:flex;flex-direction:column;gap:2px;">
          {newName}
          {row.user.username === newName && (
            <span style="color:green;font-weight:bold;">in use</span>
          )}
        </div>
      ),
      sortable: true,
      filterable: true,
    },
    {
      key: "oldName",
      header: "Old Username",
      selector: (row) => row.oldName,
      sortable: true,
      filterable: true,
    },
    {
      key: "timestamp",
      header: "Changed At",
      selector: (row) => row.timestamp,
      customRender: (timestamp) => new Date(timestamp * 1000).toISOString(),
      sortable: true,
      filterable: true,
    },
  ];

  return (
    <LoggingLayout>
      <SiteTitle>Name Change Logs</SiteTitle>
      <h1>Name Change Logs</h1>
      <IntegratedTable
        columns={columns}
        rows={logs}
        getRowId={(row) => `${row.id}`}
      />
    </LoggingLayout>
  );
}

export default NamechangeLogsScreen;
