import { useParams } from "@solidjs/router";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { createEffect, createSignal, onMount, Show } from "solid-js";
import {
  AdminArticleCreateParams,
  adminArticleService,
  AdminArticleWire,
} from "@crabshell/admin-client";
import { ArticleEditor } from "../article-editor/ArticleEditor";

export function ArticleEditScreen() {
  const { articleId } = useParams();
  const [loading, setLoading] = createSignal(false);
  const [article, setArticle] = createSignal<AdminArticleWire>();

  onMount(async () => {
    try {
      const response = await adminArticleService.getById(Number(articleId));
      setArticle({ ...response });
    } catch (error) {
      alert("Failed to fetch article.");
      console.error(error);
    }
  });

  createEffect(() => console.log("article: ", article()));

  async function onEdit(dto: AdminArticleCreateParams) {
    try {
      setLoading(true);
      await adminArticleService.updateById(Number(articleId), dto);
    } catch (error) {
      alert(`Failed to save: ${error}`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserLayout>
      <Show when={article()} fallback={<i class="fa fa-spinner fa-spin" />}>
        <ArticleEditor defaultArticle={() => article()!} onSave={onEdit} />
      </Show>
    </UserLayout>
  );
}

export default ArticleEditScreen;
