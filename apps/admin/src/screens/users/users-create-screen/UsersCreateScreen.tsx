import {
  AdminUserCreateParams,
  adminUserService,
} from "@crabshell/admin-client";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { UsersEditor } from "../users-editor/UsersEditor";
import toast from "solid-toast";

export function UsersCreateScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = createSignal(false);

  async function onCreate(dto: AdminUserCreateParams) {
    try {
      if (loading()) {
        return;
      }
      setLoading(true);
      const user = await adminUserService.create(dto);
      setLoading(false);
      toast.success("User successfully created");
      return navigate(`/users/${user.id}`);
    } catch (e: any) {
      toast.error("Failed to create user");
      setLoading(false);
      throw e;
    }
  }

  return (
    <UserLayout>
      <h2>Create User</h2>
      <div class="card">
        <UsersEditor onSave={onCreate} />
      </div>
    </UserLayout>
  );
}

export default UsersCreateScreen;
