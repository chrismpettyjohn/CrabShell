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
      <input
        name="description"
        value={dto().description}
        onInput={onChange}
        type="text"
      />

      <label>Image</label>
      <input
        name="imageUrl"
        value={dto().imageUrl}
        onInput={onChange}
        type="text"
      />

      <label>Content</label>
      <textarea name="content" value={dto().content} onInput={onChange} />
      <button type="submit">Save</button>
    </form>
  );
}
