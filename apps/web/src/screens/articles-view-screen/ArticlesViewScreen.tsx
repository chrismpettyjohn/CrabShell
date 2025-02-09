import { createSignal, onMount, Show, type Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { GuardUser } from "../../components/guard-user/GuardUser";
import { SiteTitle } from "../../components/site-title/SiteTitle";
import { articleService, ArticleWire } from "@crabshell/public-client";
import { useParams } from "@solidjs/router";
import { IMAGER_BASE_URL } from "../../App.const";
import { getFormattedDateTime } from "../../App.util";

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
          <div class="card">
            <Show
              when={article()}
              fallback={<i class="fa fa-spinner fa-spin" />}
            >
              <div
                style={`border-radius:8px;border:1px solid white;display:flex;padding:8px;flex:1;justify-content:space-between;align-items:center;background:url('${article()?.imageUrl}');background-position:center;background-repeat:no-repeat;background-size:cover;height:120px;`}
              >
                <h1 style="color:white;">{article()?.name}</h1>
                <p style="color:white;">
                  Posted {getFormattedDateTime(new Date(article()?.createdAt!))}
                </p>
              </div>
              <div innerHTML={article()?.content} />
            </Show>
          </div>
          <br />
          <div
            class="card"
            style="height:fit-content;display:flex;justify-content:space-between;align-items:center;"
          >
            <div style="display:flex;">
              <img
                class="avatar"
                src={`${IMAGER_BASE_URL}?figure=${article()?.user?.look}&headonly=1`}
                style="object-fit: contain; height: 65px"
              />
              <div style="margin-top:12px;">
                <div style="margin-bottom:8px;">Posted by:</div>
                <h2>{article()?.user?.username}</h2>
              </div>
            </div>
            <div>{article()?.user?.rank?.name}</div>
          </div>
        </div>
      </main>
    </GuardUser>
  );
};

export default ArticlesViewScreen;
