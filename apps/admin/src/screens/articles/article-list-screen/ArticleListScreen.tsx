import { createSignal, onMount } from "solid-js";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { adminArticleService, AdminArticleWire } from "@crabshell/admin-client";
import { A } from "@solidjs/router";

export function ArticleListScreen() {
  const [articles, setArticles] = createSignal<AdminArticleWire[]>([]);
  onMount(async () => {
    const response = await adminArticleService.getAll();
    setArticles(response);
  });

  return (
    <UserLayout>
      <SiteTitle>Articles</SiteTitle>
      <div style="display:flex;justify-content:flex-end;width:100%;margin-bottom:14px;">
        <A href="/articles/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <table>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>Edited At</th>
            <th>Posted At</th>
          </tr>
        </thead>
        <tbody>
          {articles().map((_, i) => (
            <tr>
              <td>#{i + 1}</td>
              <td>
                <A href={`/articles/${_.id}`}>
                  <img
                    src={_.imageUrl}
                    style="object-fit: contain"
                    height={100}
                  />
                </A>
              </td>
              <td>
                <A href={`/articles/${_.id}`}>{_.name}</A>
              </td>
              <td>{_.description}</td>
              <td>{_.updatedAt}</td>
              <td>{_.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </UserLayout>
  );
}

export default ArticleListScreen;
