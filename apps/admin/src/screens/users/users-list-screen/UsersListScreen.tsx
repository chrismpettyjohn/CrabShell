import { createSignal, onMount } from "solid-js";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { adminUserService, AdminUserWire } from "@crabshell/admin-client";
import { A, useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import { IMAGER_BASE_URL } from "../../../App.const";
import {
  IntegratedTable,
  ITableColumn,
} from "../../../components/integrated-table/IntegratedTable";

export function UsersListScreen() {
  const navigate = useNavigate();
  const [users, setUsers] = createSignal<AdminUserWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminUserService.getAll();
      console.log("Loaded users:", response);
      setUsers(response);
    } catch (e) {
      toast.error("Failed to fetch users");
      console.error(e);
    }
  });

  const columns: ITableColumn<AdminUserWire>[] = [
    {
      key: "look",
      header: "Avatar",
      selector: (row) => row.look,
      customRender: (look: string, row: AdminUserWire) => (
        <A href={`/users/${row.username}`} onClick={(e) => e.stopPropagation()}>
          <img
            class="avatar"
            src={`${IMAGER_BASE_URL}?figure=${look}&headonly=1`}
            style="object-fit: contain; height: 65px"
          />
        </A>
      ),
      width: 80,
    },
    {
      key: "username",
      header: "Username",
      selector: (row) => row.username,
      customRender: (username: string) => (
        <A href={`/users/${username}`} onClick={(e) => e.stopPropagation()}>
          {username}
        </A>
      ),
      filterable: true,
      sortable: true,
    },
    {
      key: "credits",
      header: "Credits",
      selector: (row) => row.credits,
      customRender: (credits: string) => (
        <>{Number(credits).toLocaleString()}</>
      ),
      filterable: true,
      sortable: true,
    },
    {
      key: "pixels",
      header: "Pixels",
      selector: (row) => row.pixels,
      customRender: (pixels: string) => <>{Number(pixels).toLocaleString()}</>,
      filterable: true,
      sortable: true,
    },
    {
      key: "points",
      header: "Points",
      selector: (row) => row.points,
      customRender: (points: string) => <>{Number(points).toLocaleString()}</>,
      filterable: true,
      sortable: true,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Users</SiteTitle>
      <div style="display:flex;justify-content:space-between;margin-bottom:14px;width:100%;">
        <h1>Users</h1>
      </div>
      <div class="card">
        <IntegratedTable
          columns={columns}
          rows={users}
          getRowId={(row) => `${row.id}`}
          onRowClick={(row) => navigate(`/users/${row.id}`)}
        />
      </div>
    </UserLayout>
  );
}

export default UsersListScreen;
