import {
  AdminBadgeCreateParams,
  AdminBadgeWire,
} from "@crabshell/admin-client";
import { createSignal } from "solid-js";

export interface BadgesEditorProps {
  defaultBadge?(): AdminBadgeWire;
  onSave(dto: AdminBadgeCreateParams): void;
}

export function BadgesEditor({ defaultBadge, onSave }: BadgesEditorProps) {
  const [dto, setDTO] = createSignal<AdminBadgeCreateParams>({
    code: defaultBadge?.()?.code ?? "",
    publicName: defaultBadge?.()?.publicName ?? "",
  });

  function onSubmit(event: Event) {
    event.preventDefault();
  }

  function onChange(event: InputEvent) {
    const { name, value } = event.currentTarget as HTMLInputElement;
    setDTO((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Code</label>
      <input name="code" value={dto().code} onInput={onChange} type="text" />

      <label>Public Name</label>
      <input
        name="publicName"
        value={dto().publicName}
        onInput={onChange}
        type="text"
      />

      <div style="display:flex;justify-content:flex-end;width:100%;margin-top:auto;">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
