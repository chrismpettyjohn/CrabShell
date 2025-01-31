import { createSignal, onMount, type Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { GuardUser } from "../../components/guard-user/GuardUser";
import { SiteTitle } from "../../components/site-title/SiteTitle";
import { articleService, ArticleWire } from "@crabshell/client";
import { useParams } from "@solidjs/router";

const ArticlesViewScreen: Component = () => {
  const params: { articleId: string } = useParams();
  const [article, setArticle] = createSignal<ArticleWire>();

  onMount(async () => {
    const response = await articleService.getById(Number(params.articleId));
    setArticle(response);
  });

  return (
    <GuardUser>
      <SiteTitle>Articles</SiteTitle>
      <SiteSidebar />
      <main>
        <div class="main-content news-article-page">
          <h1>{article()?.name}</h1>
        </div>
      </main>
    </GuardUser>
  );
};

export default ArticlesViewScreen;
