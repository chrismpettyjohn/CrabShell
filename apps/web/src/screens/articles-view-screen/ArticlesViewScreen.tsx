import { createSignal, onMount, Show, type Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { GuardUser } from "../../components/guard-user/GuardUser";
import { SiteTitle } from "../../components/site-title/SiteTitle";
import { articleService, ArticleWire } from "@crabshell/public-client";
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
          <div class="card">
            <Show
              when={article()}
              fallback={<i class="fa fa-spinner fa-spin" />}
            >
              <div innerHTML={article()?.content} />
            </Show>
          </div>
          <br />
          <div
            class="card"
            style="height:fit-content;display:flex;justify-content:space-between;align-items:center;"
          >
            <div>
              <div style="margin-bottom:8px;">Posted by:</div>
              <h2>{article()?.user?.username}</h2>
            </div>
            <div>{article()?.user?.rank?.name}</div>
          </div>
        </div>
      </main>
    </GuardUser>
  );
};

export default ArticlesViewScreen;
