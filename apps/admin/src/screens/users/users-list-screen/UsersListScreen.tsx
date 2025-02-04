import { createSignal, onMount } from "solid-js";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { adminUserService, AdminUserWire } from "@crabshell/admin-client";
import { A, useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import { IMAGER_BASE_URL } from "../../../App.const";

export function UsersListScreen() {
  const navigate = useNavigate();
  const [users, setUsers] = createSignal<AdminUserWire[]>([]);
  onMount(async () => {
    try {
      const response = await adminUserService.getAll();
      setUsers(response);
    } catch (e: any) {
      toast.error("Failed to fetch users");
      throw e;
    }
  });

  return (
    <UserLayout>
      <SiteTitle>Users</SiteTitle>
      <div style="display:flex;justify-content:flex-end;margin-bottom:14px;width:100%;">
        <A href="/users/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users().map((_, i) => (
            <tr onClick={() => navigate(`/users/${_.id}`)}>
              <td>
                <img
                  class="avatar"
                  src={`${IMAGER_BASE_URL}?figure=${_.look}&headonly=1`}
                  style="object-fit: contain; height: 65px"
                />
              </td>
              <td>{_.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </UserLayout>
  );
}

export default UsersListScreen;
