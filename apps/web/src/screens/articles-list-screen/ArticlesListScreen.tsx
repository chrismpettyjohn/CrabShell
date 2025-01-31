import { createSignal, onMount, type Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { GuardUser } from "../../components/guard-user/GuardUser";
import { SiteTitle } from "../../components/site-title/SiteTitle";
import { articleService, ArticleWire } from "@crabshell/client";
import { A } from "@solidjs/router";

const ArticlesListScreen: Component = () => {
  const [articles, setArticles] = createSignal<ArticleWire[]>([]);

  onMount(async () => {
    const response = await articleService.getAll();
    setArticles(response);
  });

  return (
    <GuardUser>
      <SiteTitle>Articles</SiteTitle>
      <SiteSidebar />
      <main>
        <div class="main-content news-article-page">
          <div class="news-filters">
            <div class="news-chips">
              <div class="chip active" data-category="all">
                All
              </div>
              <div class="chip" data-category="Client">
                Client
              </div>
              <div class="chip" data-category="News">
                News
              </div>
            </div>
          </div>
          <div class="news-articles">
            <div class="container" id="articles-container">
              {articles().map((_) => (
                <A href={`/articles/${_.id}`}>
                  <div
                    class="article-card"
                    data-category="Client"
                    style={`background-image: url(${_.imageUrl});`}
                  >
                    <div class="card-content">
                      <div class="label">Client</div>
                      <h3>{_.name}</h3>
                      <p>{_.description}</p>
                      <span>{_.createdAt}</span>
                    </div>
                  </div>
                </A>
              ))}
            </div>
          </div>
        </div>
      </main>
    </GuardUser>
  );
};

export default ArticlesListScreen;
