import { A, useNavigate } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import {
  IntegratedTable,
  ITableColumn,
} from "../../../components/integrated-table/IntegratedTable";
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
