import {
  AdminEventCreateParams,
  AdminEventWire,
} from "@crabshell/admin-client";
import { createSignal } from "solid-js";
import { toLocalISOString } from "../../../App.util";

export interface EventsEditorProps {
  defaultEvent?: AdminEventWire;
  onSave(dto: AdminEventCreateParams): void;
}

export function EventsEditor({ defaultEvent, onSave }: EventsEditorProps) {
  const [dto, setDTO] = createSignal<AdminEventCreateParams>({
    title: defaultEvent?.title ?? "",
    content: defaultEvent?.content ?? "",
    startsAt: defaultEvent?.startsAt ?? Math.floor(Date.now() / 1000),
    endsAt: defaultEvent?.endsAt ?? Math.floor(Date.now() / 1000),
  });

  function onChange(event: Event) {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    setDTO({ ...dto(), [target.name]: target.value });
  }

  function onChangeDate(event: Event) {
    const target = event.target as HTMLInputElement;
    setDTO({
      ...dto(),
      [target.name]: new Date(target.value).getTime() / 1000,
    });
  }

  function onSubmit(event: Event) {
    event.preventDefault();
    onSave({
      title: dto().title,
      content: dto().content,
      startsAt: Math.floor(dto().startsAt),
      endsAt: Math.floor(dto().endsAt),
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Title</h2>
      <input type="text" name="title" value={dto().title} onChange={onChange} />

      <div style="display:flex;gap:24px;">
        <div style="flex:1;">
          <h2>Starts At</h2>
          <br />
          <input
            type="datetime-local"
            name="startsAt"
            value={toLocalISOString(dto().startsAt)}
            onChange={onChangeDate}
            style="width:100%;"
          />
        </div>
        <div style="flex:1;">
          <h2>Ends At</h2>
          <br />
          <input
            type="datetime-local"
            name="endsAt"
            value={toLocalISOString(dto().endsAt)}
            onChange={onChangeDate}
            style="width:100%;"
          />
        </div>
      </div>

      <h2>Content</h2>
      <textarea
        rows={4}
        name="content"
        value={dto().content}
        onChange={onChange}
      />

      <div style="display:flex;justify-content:flex-end;width:100%;margin-top:auto;">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
