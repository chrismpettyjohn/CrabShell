import { A, useNavigate } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";
import { UserLayout } from "../../../components/user-layout/UserLayout";
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

  const fetchData = async () => {
    try {
      const response = await adminItemsBaseService.getAll();
      setItems((prev) => [...prev, ...response]); // Append new rows
    } catch (error) {
      toast.error("Failed to load furniture items.");
    }
  };

  onMount(() => {
    fetchData();
  });

  const columns: ITableColumn<AdminItemsBaseWire>[] = [
    {
      header: "Public Name",
      selector: (row) => row.publicName,
      width: 225,
      sortable: true,
    },
    {
      header: "Item Name",
      selector: (row) => row.itemName,
      width: 225,
      sortable: true,
    },
    { header: "Type", selector: (row) => row.type, width: 100, sortable: true },
    {
      header: "Interaction",
      selector: (row) => row.interactionType,
      width: 150,
    },
    {
      header: "Interaction Modes",
      selector: (row) => row.interactionModesCount,
      width: 150,
      sortable: true,
    },
    {
      header: "Width",
      selector: (row) => row.width,
      width: 100,
      sortable: true,
    },
    {
      header: "Length",
      selector: (row) => row.length,
      width: 100,
      sortable: true,
    },
    {
      header: "Stack Height",
      selector: (row) => row.stackHeight,
      width: 150,
      sortable: true,
    },
    { header: "Can Stack", selector: (row) => row.allowStack, width: 100 },
    {
      header: "Inventory Stacks",
      selector: (row) => row.allowInventoryStack,
      width: 150,
    },
    { header: "Can Sit", selector: (row) => row.allowSit, width: 100 },
    { header: "Can Walk", selector: (row) => row.allowWalk, width: 100 },
    { header: "Can Gift", selector: (row) => row.allowGift, width: 100 },
    { header: "Can Trade", selector: (row) => row.allowTrade, width: 100 },
    { header: "Can Recycle", selector: (row) => row.allowRecycle, width: 100 },
    {
      header: "Can Sell",
      selector: (row) => row.allowMarketplaceSell,
      width: 100,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Furniture</SiteTitle>
      <div style="display: flex; align-items: center;justify-content: space-between; margin-bottom: 14px; width: 100%;">
        <h2>Furniture</h2>
        <A href="/furniture/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <IntegratedTable
        columns={columns}
        rows={items}
        rowHeight={40}
        loadMoreRows={fetchData}
        onRowClick={(row) => navigate(`/furniture/${row.id}`)}
      />
    </UserLayout>
  );
}

export default FurnitureListScreen;
