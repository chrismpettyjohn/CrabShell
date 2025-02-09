import {
  AdminArticleCreateParams,
  adminArticleService,
} from "@crabshell/admin-client";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { ArticleEditor } from "../article-editor/ArticleEditor";
import toast from "solid-toast";
import { SiteTitle } from "@crabshell/shared-web";

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
      toast.success("Article successfully created");
      return navigate(`/articles/${article.id}`);
    } catch (e: any) {
      toast.error("Failed to create article");
      setLoading(false);
      throw e;
    }
  }

  return (
    <UserLayout>
      <SiteTitle>Create Article</SiteTitle>
      <h1>Create Article</h1>
      <div class="card">
        <ArticleEditor onSave={onCreate} />
      </div>
    </UserLayout>
  );
}

export default ArticlesCreateScreen;
