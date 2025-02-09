import {
  AdminRankCreateParams,
  AdminRankWire,
  RankScope,
} from "@crabshell/admin-client";
import { createSignal, createEffect } from "solid-js";
import { BADGE_BASE_URL, BADGE_EXT } from "../../../App.const";

export interface RankEditorProps {
  defaultRank?(): AdminRankWire;
  onSave(dto: AdminRankCreateParams): void;
}

export function RanksEditor({ defaultRank, onSave }: RankEditorProps) {
  const initialScopes = defaultRank?.()?.scopes ?? {};
  const [dto, setDTO] = createSignal<AdminRankCreateParams>({
    name: defaultRank?.()?.name ?? "",
    badgeCode: defaultRank?.()?.badgeCode ?? "",
    scopes: { ...(initialScopes as any) },
  });

  function prettifyScopeName(scope: string) {
    return scope
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  }

  function onChange(event: InputEvent) {
    const { name, value } = event.currentTarget as HTMLInputElement;
    setDTO((prev) => ({ ...prev, [name]: value }));
  }

  function onBlur() {
    onSave(dto());
  }

  function onToggleScope(scope: RankScope) {
    setDTO((prev) => ({
      ...prev,
      scopes: {
        ...prev.scopes,
        [scope]: !prev.scopes[scope],
      },
    }));
  }

  function onSubmit(event: Event) {
    event.preventDefault();
    onSave(dto());
  }

  createEffect(() => {
    onSave(dto());
  });

  return (
    <form onSubmit={onSubmit}>
      <h2>Name</h2>
      <input
        name="name"
        value={dto().name}
        onInput={onChange}
        onBlur={onBlur}
        type="text"
      />
      <h2>Badge</h2>
      <div style="display:flex;gap:14px;justify-content:space-between;align-items:center;width:100%;">
        <img
          src={`${BADGE_BASE_URL}/${dto().badgeCode}${BADGE_EXT}`}
          style="object-fit: contain; height: 45px;"
        />
        <input
          name="badgeCode"
          value={dto().badgeCode}
          onInput={onChange}
          onBlur={onBlur}
          type="text"
          style="width:100%;"
        />
      </div>

      <h2>Scopes</h2>
      <div style="display: flex; flex-direction: column; flex-wrap: wrap; gap: 10px;">
        {Object.keys(dto().scopes).map((scope) => (
          <div style="display: flex; align-items: center; gap: 8px;">
            <input
              type="checkbox"
              checked={dto().scopes[scope as RankScope]}
              onChange={() => onToggleScope(scope as RankScope)}
              style="margin-top:4px;"
            />
            <h3>{prettifyScopeName(scope)}</h3>
          </div>
        ))}
      </div>
    </form>
  );
}
