import { useParams } from "@solidjs/router";
import { createSignal, onMount, Show } from "solid-js";
import {
  adminUserService,
  AdminUserUpdateByIdParams,
  AdminUserWire,
} from "@crabshell/admin-client";
import { UsersEditor } from "../users-editor/UsersEditor";
import toast from "solid-toast";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { UsersLayout } from "../UsersLayout";

export function UsersEditScreen() {
  const { userId } = useParams();
  const [loading, setLoading] = createSignal(false);
  const [user, setUser] = createSignal<AdminUserWire>();

  onMount(async () => {
    try {
      const response = await adminUserService.getById(Number(userId));
      setUser({ ...response });
    } catch (error) {
      toast.error("Failed to fetch user");
      console.error(error);
    }
  });

  async function onEdit(dto: AdminUserUpdateByIdParams) {
    try {
      setLoading(true);
      await adminUserService.updateById(Number(userId), dto);
      toast.success("User successfully updated");
    } catch (error) {
      toast.error("Failed to update user");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UsersLayout userId={Number(userId)}>
      <SiteTitle>Edit User</SiteTitle>
      <h1>Edit User</h1>
      <div class="card">
        <Show when={user()} fallback={<i class="fa fa-spinner fa-spin" />}>
          <UsersEditor defaultUser={() => user()!} onSave={onEdit} />
        </Show>
      </div>
    </UsersLayout>
  );
}

export default UsersEditScreen;
