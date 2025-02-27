import { createSignal, onMount, Show, type Component } from "solid-js";
import { SiteTitle } from "@crabshell/shared-web";
import { articleService, ArticleWire } from "@crabshell/public-client";
import { useParams } from "@solidjs/router";
import { IMAGER_BASE_URL } from "../../App.const";
import { getFormattedDateTime } from "../../App.util";
import { UserLayout } from "../../components/user-layout/UserLayout";

const ArticlesViewScreen: Component = () => {
  const params: { articleId: string } = useParams();
  const [article, setArticle] = createSignal<ArticleWire>();

  onMount(async () => {
    const response = await articleService.getById(Number(params.articleId));
    setArticle(response);
  });

  return (
    <UserLayout>
      <SiteTitle>Articles</SiteTitle>
      <main>
        <div class="main-content news-article-page">
          <div class="card">
            <Show when={article()} fallback={<i class="fa fa-spinner fa-spin" />}>
              <>
                <div class="background" style={`background:url('${article()?.imageUrl}');`} />
                <h1 style="color:white;">{article()?.name}</h1>
                <p style="color:white;">Posted {getFormattedDateTime(new Date(article()?.createdAt!))}</p>
                <div innerHTML={article()?.content} />
              </>
            </Show>
          </div>
          <br />
          <div class="card" style="height:fit-content;display:flex;justify-content:space-between;align-items:center;">
            <div style="display:flex;">
              <img class="avatar" src={`${IMAGER_BASE_URL}?figure=${article()?.user?.look}&headonly=1`} style="object-fit: contain; height: 65px" />
              <div style="margin-top:12px;">
                <div style="margin-bottom:8px;">Posted by:</div>
                <h2>{article()?.user?.username}</h2>
              </div>
            </div>
            <div>{article()?.user?.rank?.name}</div>
          </div>
        </div>
      </main>
    </UserLayout>
  );
};

export default ArticlesViewScreen;
