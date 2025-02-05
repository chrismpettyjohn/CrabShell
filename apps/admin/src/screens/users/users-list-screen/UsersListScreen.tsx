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
      setUsers(response);
    } catch (e) {
      toast.error("Failed to fetch users");
      throw e;
    }
  });

  const columns: ITableColumn<AdminUserWire>[] = [
    {
      header: "Avatar",
      selector: (row) => row.look,
      customRender: (look) => (
        <img
          class="avatar"
          src={`${IMAGER_BASE_URL}?figure=${look}&headonly=1`}
          style="object-fit: contain; height: 65px"
        />
      ),
      width: 80,
    },
    {
      header: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Users</SiteTitle>
      <IntegratedTable
        columns={columns}
        rows={users}
        onRowClick={(row) => navigate(`/users/${row.id}`)}
      />
    </UserLayout>
  );
}

export default UsersListScreen;
