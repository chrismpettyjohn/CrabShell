import {
  AdminArticleCreateParams,
  AdminArticleWire,
} from "@crabshell/admin-client";
import { createSignal } from "solid-js";
import { WYSIWYGEditor } from "../../../components/wysiwyg-editor/WysiwygEditor";

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

  function onChangeContent(content: string) {
    setDTO((_) => ({
      ..._,
      content,
    }));
  }

  function onSubmit(event: Event) {
    event.preventDefault();
    onSave(dto());
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Name</h2>
      <input name="name" value={dto().name} onInput={onChange} type="text" />
      <h2>Description</h2>
      <textarea
        name="description"
        value={dto().description}
        onInput={onChange}
        rows={5}
      />

      <h2>Image</h2>
      <input
        name="imageUrl"
        value={dto().imageUrl}
        onInput={onChange}
        placeholder="https://www.habboon.pw/web-gallery/web_promos/GTF2020.png"
        type="text"
      />
      <h2>Content</h2>
      <WYSIWYGEditor content={dto().content} onChange={onChangeContent} />
      <div style="display:flex;justify-content:flex-end;width:100%;margin-top:auto;">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
