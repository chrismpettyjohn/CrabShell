import { createSignal, onMount } from "solid-js";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { adminArticleService, AdminArticleWire } from "@crabshell/admin-client";
import { A, useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import {
  IntegratedTable,
  ITableColumn,
} from "../../../components/integrated-table/IntegratedTable";

export function ArticleListScreen() {
  const navigate = useNavigate();
  const [articles, setArticles] = createSignal<AdminArticleWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminArticleService.getAll();
      setArticles(response);
    } catch (e: any) {
      toast.error("Failed to fetch articles");
      throw e;
    }
  });

  const columns: ITableColumn<AdminArticleWire>[] = [
    {
      header: "#",
      selector: (_, i) => i + 1,
      width: 50,
    },
    {
      header: "Cover",
      selector: (row) => row.imageUrl,
      customRender: (imageUrl) => (
        <img
          src={imageUrl}
          class="img-fluid"
          style="object-fit: contain; height: 100px"
        />
      ),
      width: 120,
    },
    {
      header: "Title",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      header: "Description",
      selector: (row) => row.description,
    },
    {
      header: "Edited At",
      selector: (row) => row.updatedAt,
      sortable: true,
    },
    {
      header: "Posted At",
      selector: (row) => row.createdAt,
      sortable: true,
    },
  ];

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
      <IntegratedTable
        columns={columns}
        rows={articles}
        onRowClick={(row) => navigate(`/articles/${row.id}`)}
      />
    </UserLayout>
  );
}

export default ArticleListScreen;
