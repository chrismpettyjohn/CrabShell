import { createSignal, onMount } from "solid-js";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { LoggingLayout } from "../LoggingLayout";
import toast from "solid-toast";
import {
  adminUserChatlogService,
  AdminUserCommandLogResult,
  AdminUserCommandLogWire,
} from "@crabshell/admin-client";
import {
  IntegratedTable,
  ITableColumn,
} from "../../../components/integrated-table/IntegratedTable";
import { A } from "@solidjs/router";
import { IMAGER_BASE_URL } from "../../../App.const";

export function CommandLogsScreen() {
  const [logs, setLogs] = createSignal<AdminUserCommandLogWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminUserChatlogService.getAll();
      setLogs(response);
    } catch (e) {
      toast.error("Failed to fetch command logs");
      console.error(e);
    }
  });

  const columns: ITableColumn<AdminUserCommandLogWire>[] = [
    {
      key: "userId",
      header: "User",
      selector: (row: AdminUserCommandLogWire) => row.user.username,
      customRender: (_: number, row: AdminUserCommandLogWire) => (
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
    },
    {
      key: "command",
      header: "Command",
      selector: (row: AdminUserCommandLogWire) => row.command,
      sortable: true,
    },
    {
      key: "params",
      header: "Parameters",
      selector: (row: AdminUserCommandLogWire) => row.params,
      sortable: false,
    },
    {
      key: "result",
      header: "Result",
      selector: (row: AdminUserCommandLogWire) => row.result,
      customRender: (result: AdminUserCommandLogResult) => (
        <span
          style={
            result === AdminUserCommandLogResult.Success
              ? "color:green;"
              : "color:red"
          }
        >
          {result === AdminUserCommandLogResult.Success ? "Success" : "Failure"}
        </span>
      ),
      sortable: false,
    },
  ];

  return (
    <LoggingLayout>
      <SiteTitle>Command Logs</SiteTitle>
      <h1>Command Logs</h1>
      <IntegratedTable
        columns={columns}
        rows={logs}
        getRowId={(row: AdminUserCommandLogWire) => row.userId + row.command}
      />
    </LoggingLayout>
  );
}

export default CommandLogsScreen;
