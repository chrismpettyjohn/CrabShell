import { A, useNavigate } from "@solidjs/router";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { createSignal, onMount } from "solid-js";
import {
  adminItemsBaseService,
  AdminItemsBaseWire,
} from "@crabshell/admin-client";
import toast from "solid-toast";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import {
  IntegratedTable,
  ITableColumn,
} from "../../../components/integrated-table/IntegratedTable";

export function FurnitureListScreen() {
  const navigate = useNavigate();
  const [items, setItems] = createSignal<AdminItemsBaseWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminItemsBaseService.getAll();
      setItems(response);
    } catch (e: any) {
      toast.error("Failed to fetch furniture");
      throw e;
    }
  });

  const columns: ITableColumn<AdminItemsBaseWire>[] = [
    {
      header: "Public Name",
      sortable: true,
      selector: (row) => row.publicName,
    },
    { header: "Item Name", sortable: true, selector: (row) => row.itemName },
    { header: "Type", sortable: true, selector: (row) => row.type },
    {
      header: "Interaction",
      sortable: true,
      selector: (row) => row.interactionType,
    },
    {
      header: "Interaction Modes",
      sortable: true,
      selector: (row) => row.interactionModesCount,
    },
    { header: "Width", sortable: true, selector: (row) => row.width },
    { header: "Length", sortable: true, selector: (row) => row.length },
    {
      header: "Stack Height",
      sortable: true,
      selector: (row) => row.stackHeight,
    },
    { header: "Can Stack", sortable: true, selector: (row) => row.allowStack },
    {
      header: "Inventory Stacks",
      sortable: true,
      selector: (row) => row.allowInventoryStack,
    },
    { header: "Can Sit", sortable: true, selector: (row) => row.allowSit },
    { header: "Can Walk", sortable: true, selector: (row) => row.allowWalk },
    { header: "Can Gift", sortable: true, selector: (row) => row.allowGift },
    { header: "Can Trade", sortable: true, selector: (row) => row.allowTrade },
    {
      header: "Can Recycle",
      sortable: true,
      selector: (row) => row.allowRecycle,
    },
    {
      header: "Can Sell",
      sortable: true,
      selector: (row) => row.allowMarketplaceSell,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Furniture</SiteTitle>
      <h1>Furniture</h1>
      <div style="display:flex;justify-content:flex-end;margin-bottom:14px;width:100%;">
        <A href="/furniture/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>

      {/* Table Container for Horizontal Scrolling */}
      <div style="overflow-x: auto; width: 100%;">
        <IntegratedTable
          columns={columns}
          rows={items} // Pass the signal directly, not items()
          onRowClick={(row) => navigate(`/furniture/${row.id}`)}
          pageSize={10}
        />
      </div>
    </UserLayout>
  );
}

export default FurnitureListScreen;
