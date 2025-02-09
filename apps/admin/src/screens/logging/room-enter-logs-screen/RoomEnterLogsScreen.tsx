import { createSignal, onMount } from "solid-js";
import { LoggingLayout } from "../LoggingLayout";
import toast from "solid-toast";
import {
  adminUserRoomEnterLogService,
  AdminUserRoomEnterLogWire,
} from "@crabshell/admin-client";
import {
  SiteTitle,
  IntegratedTable,
  ITableColumn,
} from "@crabshell/shared-web";
import { A } from "@solidjs/router";
import { IMAGER_BASE_URL } from "../../../App.const";

export function RoomEnterLogsScreen() {
  const [logs, setLogs] = createSignal<AdminUserRoomEnterLogWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminUserRoomEnterLogService.getAll();
      setLogs(response);
    } catch (e) {
      toast.error("Failed to fetch room visit logs");
      console.error(e);
    }
  });

  const columns: ITableColumn<AdminUserRoomEnterLogWire>[] = [
    {
      key: "user",
      header: "User",
      selector: (row: AdminUserRoomEnterLogWire) => row.user.username,
      customRender: (_: number, row: AdminUserRoomEnterLogWire) => (
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
      key: "roomID",
      header: "Room ID",
      selector: (row: AdminUserRoomEnterLogWire) => row.roomID,
      sortable: true,
    },
    {
      key: "enteredAt",
      header: "Entered At",
      selector: (row: AdminUserRoomEnterLogWire) =>
        new Date(row.enteredAt * 1000).toISOString(),
      sortable: true,
    },
    {
      key: "leftAt",
      header: "Left At",
      selector: (row: AdminUserRoomEnterLogWire) =>
        row.leftAt
          ? new Date(row.leftAt * 1000).toISOString()
          : "Still in room",
      sortable: true,
    },
  ];

  return (
    <LoggingLayout>
      <SiteTitle>Room Visit Logs</SiteTitle>
      <h1>Room Visit Logs</h1>
      <IntegratedTable
        columns={columns}
        rows={logs}
        getRowId={(row: AdminUserRoomEnterLogWire) => `${row.id}`}
      />
    </LoggingLayout>
  );
}

export default RoomEnterLogsScreen;
