import { articleService, ArticleWire } from "@crabshell/client";
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
          <div class="card" style={`background-image: url(${_.imageUrl});`}>
            <div class="card-content">
              <div class="label">Client</div>
              <h3>{_.name}</h3>
              <p>{_.description}</p>
              <span>{_.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
