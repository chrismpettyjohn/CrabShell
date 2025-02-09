import {
  AdminUserUpdateByIdParams,
  AdminUserWire,
} from "@crabshell/admin-client";
import { createSignal } from "solid-js";

export interface UserEditorProps {
  defaultUser?(): AdminUserWire;
  onSave(dto: AdminUserUpdateByIdParams): void;
}

export function UsersEditor({ defaultUser, onSave }: UserEditorProps) {
  const [dto, setDTO] = createSignal<AdminUserUpdateByIdParams>({
    username: defaultUser?.()?.username ?? "",
    look: defaultUser?.()?.look ?? "",
  });

  function onChange(event: InputEvent) {
    const { name, value } = event.currentTarget as HTMLInputElement;
    setDTO((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(event: Event) {
    event.preventDefault();
    onSave(dto());
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Username</h2>
      <input
        name="username"
        value={dto().username}
        onInput={onChange}
        type="text"
      />

      <h2>Look</h2>
      <input name="look" value={dto().look} onInput={onChange} type="text" />

      <div style="display:flex;justify-content:flex-end;width:100%;margin-top:auto;">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
