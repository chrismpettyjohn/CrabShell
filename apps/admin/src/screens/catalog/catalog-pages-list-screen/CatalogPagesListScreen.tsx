import { A, useNavigate } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";
import {
  SiteTitle,
  IntegratedTable,
  ITableColumn,
} from "@crabshell/shared-web";
import {
  adminCatalogPageService,
  AdminCatalogPageWire,
} from "@crabshell/admin-client";
import toast from "solid-toast";
import { UserLayout } from "../../../components/user-layout/UserLayout";

export function CatalogPagesListScreen() {
  const navigate = useNavigate();
  const [pages, setPages] = createSignal<AdminCatalogPageWire[]>([]);

  const fetchData = async () => {
    try {
      const response = await adminCatalogPageService.getAll();
      console.log("Loaded catalog pages:", response);
      setPages(response);
    } catch (error) {
      toast.error("Failed to load catalog pages.");
      console.error(error);
    }
  };

  onMount(() => {
    fetchData();
  });

  const columns: ITableColumn<AdminCatalogPageWire>[] = [
    {
      key: "publicName",
      header: "Catalog Page",
      selector: (row) => row.publicName,
      customRender: (publicName: string, row: AdminCatalogPageWire) => (
        <A
          href={`/catalog/pages/${row.id}`}
          onClick={(e) => e.stopPropagation()}
        >
          {publicName}
        </A>
      ),
      width: 300,
      sortable: true,
      filterable: true,
    },
    {
      key: "parentId",
      header: "Parent ID",
      selector: (row) => row.parentId ?? "N/A",
      width: 150,
      sortable: true,
      filterable: true,
    },
    {
      key: "pageLayout",
      header: "Page Layout",
      selector: (row) => row.pageLayout ?? "N/A",
      width: 150,
      sortable: true,
      filterable: true,
    },
    {
      key: "iconColor",
      header: "Icon Color",
      selector: (row) => row.iconColor ?? "N/A",
      width: 150,
      sortable: true,
    },
    {
      key: "minRank",
      header: "Min Rank",
      selector: (row) => row.minRank ?? "N/A",
      width: 150,
      sortable: true,
    },
    {
      key: "visible",
      header: "Visible",
      selector: (row) => (row.visible === "1" ? "Yes" : "No"),
      width: 150,
      sortable: true,
    },
    {
      key: "enabled",
      header: "Enabled",
      selector: (row) => (row.enabled === "1" ? "Yes" : "No"),
      width: 150,
      sortable: true,
    },
    {
      key: "clubOnly",
      header: "Club Only",
      selector: (row) => (row.clubOnly === "1" ? "Yes" : "No"),
      width: 150,
      sortable: true,
    },
    {
      key: "vipOnly",
      header: "VIP Only",
      selector: (row) => (row.vipOnly === "1" ? "Yes" : "No"),
      width: 150,
      sortable: true,
    },
    {
      key: "roomId",
      header: "Room ID",
      selector: (row) => row.roomId ?? "N/A",
      width: 150,
      sortable: true,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Catalog Pages</SiteTitle>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; width: 100%;">
        <h2>Catalog Pages</h2>
        <A href="/catalog/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <div class="card">
        <IntegratedTable
          columns={columns}
          rows={pages}
          rowHeight={40}
          loadMoreRows={fetchData}
          getRowId={(row) => `${row.id}`}
          onRowClick={(row) => navigate(`/catalog/pages/${row.id}`)}
        />
      </div>
    </UserLayout>
  );
}

export default CatalogPagesListScreen;
