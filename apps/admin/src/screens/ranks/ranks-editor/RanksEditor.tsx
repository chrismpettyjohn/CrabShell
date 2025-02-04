import { AdminRankCreateParams, AdminRankWire } from "@crabshell/admin-client";
import { createSignal } from "solid-js";
import { BADGE_BASE_URL, BADGE_EXT } from "../../../App.const";

export interface RankEditorProps {
  defaultRank?(): AdminRankWire;
  onSave(dto: AdminRankCreateParams): void;
}

export function RanksEditor({ defaultRank, onSave }: RankEditorProps) {
  const [dto, setDTO] = createSignal<AdminRankCreateParams>({
    name: defaultRank?.()?.name ?? "",
    badgeCode: defaultRank?.()?.badgeCode ?? "",
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
      <label>Name</label>
      <input name="name" value={dto().name} onInput={onChange} type="text" />

      <label>Badge</label>
      <div style="display:flex;gap:14px;justify-content:space-between;align-items:center;width:100%;">
        <img
          src={`${BADGE_BASE_URL}/${dto().badgeCode}${BADGE_EXT}`}
          style="object-fit: contain; height: 45px;"
        />
        <input
          name="badgeCode"
          value={dto().badgeCode}
          onInput={onChange}
          type="text"
          style="width:100%;"
        />
      </div>
      <div style="display:flex;justify-content:flex-end;width:100%;margin-top:auto;">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
