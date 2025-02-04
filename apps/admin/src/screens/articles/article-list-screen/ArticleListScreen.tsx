import { createSignal, onMount } from "solid-js";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { adminArticleService, AdminArticleWire } from "@crabshell/admin-client";
import { A, useNavigate } from "@solidjs/router";

export function ArticleListScreen() {
  const navigate = useNavigate();
  const [articles, setArticles] = createSignal<AdminArticleWire[]>([]);
  onMount(async () => {
    const response = await adminArticleService.getAll();
    setArticles(response);
  });

  return (
    <UserLayout>
      <SiteTitle>Articles</SiteTitle>
      <div style="display:flex;justify-content:flex-end;margin-bottom:14px;width:100%;">
        <A href="/articles/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <table class="table table-striped">
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
            <tr onClick={() => navigate(`/articles/${_.id}`)}>
              <td>#{i + 1}</td>
              <td>
                <img
                  src={_.imageUrl}
                  class="img-fluid"
                  style="object-fit: contain; height: 100px"
                />
              </td>
              <td>{_.name}</td>
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
