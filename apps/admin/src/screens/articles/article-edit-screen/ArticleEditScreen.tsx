import { useParams } from "@solidjs/router";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { createEffect, createSignal, onMount, Show } from "solid-js";
import {
  AdminArticleCreateParams,
  adminArticleService,
  AdminArticleWire,
} from "@crabshell/admin-client";
import { ArticleEditor } from "../article-editor/ArticleEditor";
import toast from "solid-toast";

export function ArticleEditScreen() {
  const { articleId } = useParams();
  const [loading, setLoading] = createSignal(false);
  const [article, setArticle] = createSignal<AdminArticleWire>();

  onMount(async () => {
    try {
      const response = await adminArticleService.getById(Number(articleId));
      setArticle({ ...response });
    } catch (error) {
      toast.error("Failed to fetch article");
      console.error(error);
    }
  });

  createEffect(() => console.log("article: ", article()));

  async function onEdit(dto: AdminArticleCreateParams) {
    try {
      setLoading(true);
      await adminArticleService.updateById(Number(articleId), dto);
      toast.success("Article successfully updated");
    } catch (error) {
      toast.error("Failed to update article");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserLayout>
      <h1>Edit Article</h1>
      <div class="card">
        <Show when={article()} fallback={<i class="fa fa-spinner fa-spin" />}>
          <ArticleEditor defaultArticle={() => article()!} onSave={onEdit} />
        </Show>
      </div>
    </UserLayout>
  );
}

export default ArticleEditScreen;
