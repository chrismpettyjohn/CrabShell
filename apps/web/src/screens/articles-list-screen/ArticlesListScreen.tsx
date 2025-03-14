import { createSignal, onMount, type Component } from "solid-js";
import { SiteTitle } from "@crabshell/shared-web";
import { articleService, ArticleWire } from "@crabshell/public-client";
import { A } from "@solidjs/router";
import { getMonthDateYear } from "../../App.util";
import { UserLayout } from "../../components/user-layout/UserLayout";

const ArticlesListScreen: Component = () => {
  const [articles, setArticles] = createSignal<ArticleWire[]>([]);

  onMount(async () => {
    const response = await articleService.getAll();
    setArticles(response);
  });

  return (
    <UserLayout>
      <SiteTitle>Articles</SiteTitle>
      <main>
        <div class="main-content news-article-page">
          <div class="news-articles">
            <div class="container" id="articles-container">
              {articles().map((_) => (
                <A href={`/articles/${_.id}`}>
                  <div class="article-card" data-category="Client" style={`background-image: url(${_.imageUrl});`}>
                    <div class="card-content">
                      <h3>{_.name}</h3>
                      <p>{_.description}</p>
                      <span>{getMonthDateYear(new Date(_.createdAt))}</span>
                    </div>
                  </div>
                </A>
              ))}
            </div>
          </div>
        </div>
      </main>
    </UserLayout>
  );
};

export default ArticlesListScreen;
