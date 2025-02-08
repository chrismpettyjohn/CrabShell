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
      console.log("Loaded furniture items:", response);
      setItems((prev) => [...prev, ...response]); // Append new rows
    } catch (error) {
      toast.error("Failed to load furniture items.");
      console.error(error);
    }
  };

  onMount(() => {
    fetchData();
  });

  const columns: ITableColumn<AdminItemsBaseWire>[] = [
    {
      key: "publicName",
      header: "Public Name",
      selector: (row) => row.publicName,
      width: 225,
      sortable: true,
      filterable: true,
    },
    {
      key: "itemName",
      header: "Item Name",
      selector: (row) => row.itemName,
      width: 225,
      sortable: true,
      filterable: true,
    },
    {
      key: "type",
      header: "Type",
      selector: (row) => row.type,
      width: 100,
      sortable: true,
    },
    {
      key: "interactionType",
      header: "Interaction",
      selector: (row) => row.interactionType,
      width: 150,
    },
    {
      key: "interactionModesCount",
      header: "Interaction Modes",
      selector: (row) => row.interactionModesCount,
      width: 180,
      sortable: true,
    },
    {
      key: "width",
      header: "Width",
      selector: (row) => row.width,
      width: 100,
      sortable: true,
    },
    {
      key: "length",
      header: "Length",
      selector: (row) => row.length,
      width: 100,
      sortable: true,
    },
    {
      key: "stackHeight",
      header: "Stack Height",
      selector: (row) => row.stackHeight,
      width: 150,
      sortable: true,
    },
    {
      key: "allowStack",
      header: "Can Stack",
      selector: (row) => row.allowStack,
      width: 100,
    },
    {
      key: "allowInventoryStack",
      header: "Inventory Stacks",
      selector: (row) => row.allowInventoryStack,
      width: 150,
    },
    {
      key: "allowSit",
      header: "Can Sit",
      selector: (row) => row.allowSit,
      width: 100,
    },
    {
      key: "allowWalk",
      header: "Can Walk",
      selector: (row) => row.allowWalk,
      width: 100,
    },
    {
      key: "allowGift",
      header: "Can Gift",
      selector: (row) => row.allowGift,
      width: 100,
    },
    {
      key: "allowTrade",
      header: "Can Trade",
      selector: (row) => row.allowTrade,
      width: 100,
    },
    {
      key: "allowRecycle",
      header: "Can Recycle",
      selector: (row) => row.allowRecycle,
      width: 100,
    },
    {
      key: "allowMarketplaceSell",
      header: "Can Sell",
      selector: (row) => row.allowMarketplaceSell,
      width: 100,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Furniture</SiteTitle>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; width: 100%;">
        <h2>Furniture</h2>
        <A href="/furniture/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <div class="card">
        <IntegratedTable
          columns={columns}
          rows={items}
          rowHeight={40}
          loadMoreRows={fetchData}
          getRowId={(row) => row.id}
          onRowClick={(row) => navigate(`/furniture/${row.id}`)}
        />
      </div>
    </UserLayout>
  );
}

export default FurnitureListScreen;
