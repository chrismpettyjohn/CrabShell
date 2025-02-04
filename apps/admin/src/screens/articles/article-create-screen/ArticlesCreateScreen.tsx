import {
  AdminArticleCreateParams,
  adminArticleService,
} from "@crabshell/admin-client";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { ArticleEditor } from "../article-editor/ArticleEditor";

export function ArticlesCreateScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = createSignal(false);

  async function onCreate(dto: AdminArticleCreateParams) {
    try {
      if (loading()) {
        return;
      }
      setLoading(true);
      const article = await adminArticleService.create(dto);
      setLoading(false);
      return navigate(`/articles/${article.id}`);
    } catch (e: any) {
      alert(`Failed to create ${e}`);
      setLoading(false);
      throw e;
    }
  }

  return (
    <UserLayout>
      <h2>Create Article</h2>
      <div class="card">
        <ArticleEditor onSave={onCreate} />
      </div>
    </UserLayout>
  );
}

export default ArticlesCreateScreen;
