import { articleService, ArticleWire } from "@crabshell/public-client";
import { A } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";

export function ArticlesSection() {
  const [articles, setArticles] = createSignal<ArticleWire[]>([]);

  onMount(async () => {
    const response = await articleService.getAll();
    setArticles(response.slice(0, 4));
  });

  return (
    <div class="news-articles">
      <div class="container">
        {articles().map((_) => (
          <A href={`/articles/${_.id}`}>
            <div class="card" style={`background-image: url(${_.imageUrl});`}>
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
  );
}
