import {
  AdminArticleCreateParams,
  AdminArticleWire,
} from "@crabshell/admin-client";
import { createSignal } from "solid-js";

export interface ArticleEditorProps {
  defaultArticle?(): AdminArticleWire;
  onSave(dto: AdminArticleCreateParams): void;
}

export function ArticleEditor({ defaultArticle, onSave }: ArticleEditorProps) {
  const [dto, setDTO] = createSignal<AdminArticleCreateParams>({
    name: defaultArticle?.()?.name ?? "",
    content: defaultArticle?.()?.content ?? "",
    description: defaultArticle?.()?.description ?? "",
    imageUrl: defaultArticle?.()?.imageUrl ?? "",
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

      <label>Description</label>
      <textarea
        name="description"
        value={dto().description}
        onInput={onChange}
        rows={5}
      />

      <label>Image</label>
      <input
        name="imageUrl"
        value={dto().imageUrl}
        onInput={onChange}
        placeholder="https://www.habboon.pw/web-gallery/web_promos/GTF2020.png"
        type="text"
      />

      <label>Content</label>
      <textarea
        name="content"
        value={dto().content}
        onInput={onChange}
        rows={10}
      />
      <div style="display:flex;justify-content:flex-end;width:100%;margin-top:auto;">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
