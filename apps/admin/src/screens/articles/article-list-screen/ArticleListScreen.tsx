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
      console.log("Loaded articles:", response);
      setArticles(response);
    } catch (e) {
      toast.error("Failed to fetch articles");
      console.error(e);
    }
  });

  const handleRowEdit = async (
    originalRow: AdminArticleWire,
    modifiedRow: AdminArticleWire
  ) => {
    try {
      await adminArticleService.updateById(originalRow.id, modifiedRow);
      setArticles((prevArticles) =>
        prevArticles.map((article) =>
          article.id === originalRow.id ? modifiedRow : article
        )
      );
      toast.success(`Updated article: ${modifiedRow.name}`);
    } catch (e) {
      toast.error(`Failed to update article: ${modifiedRow.name}`);
      console.error(e);
    }
  };

  const columns: ITableColumn<AdminArticleWire>[] = [
    {
      key: "id",
      header: "#",
      selector: (row) => row.id,
      customRender: (id: string) => (
        <A href={`/articles/${id}`} onClick={(e) => e.stopPropagation()}>
          {id}
        </A>
      ),
      width: 50,
    },
    {
      key: "imageUrl",
      header: "Cover",
      editable: true,
      filterable: true,
      selector: (row) => row.imageUrl,
      customRender: (imageUrl: string, row: AdminArticleWire) => (
        <A href={`/articles/${row.id}`} onClick={(e) => e.stopPropagation()}>
          <img
            src={imageUrl}
            class="img-fluid"
            style="object-fit: contain; height: 100px"
          />
        </A>
      ),
      width: 120,
    },
    {
      key: "name",
      header: "Title",
      selector: (row) => row.name,
      customRender: (name: string, row: AdminArticleWire) => (
        <A href={`/articles/${row.id}`} onClick={(e) => e.stopPropagation()}>
          {name}
        </A>
      ),
      filterable: true,
      sortable: true,
      editable: true,
    },
    {
      key: "description",
      header: "Description",
      selector: (row) => row.description,
      editable: true,
    },
    {
      key: "updatedAt",
      header: "Edited At",
      selector: (row) => row.updatedAt,
      sortable: true,
    },
    {
      key: "createdAt",
      header: "Posted At",
      selector: (row) => row.createdAt,
      sortable: true,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Articles</SiteTitle>
      <div style="display:flex;justify-content:space-between;margin-bottom:14px;width:100%;">
        <h1>Articles</h1>
        <A href="/articles/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <div class="card">
        <IntegratedTable
          columns={columns}
          rows={articles}
          getRowId={(row) => `${row.id}`}
          onRowClick={(row) => navigate(`/articles/${row.id}`)}
          onRowEdit={handleRowEdit}
        />
      </div>
    </UserLayout>
  );
}

export default ArticleListScreen;
