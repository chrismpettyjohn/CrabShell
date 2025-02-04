import { useNavigate } from "@solidjs/router";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { createSignal, onMount } from "solid-js";
import {
  adminItemsBaseService,
  AdminItemsBaseWire,
} from "@crabshell/admin-client";
import toast from "solid-toast";

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

  return (
    <UserLayout>
      <h2>Furniture</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Public Name</th>
            <th>Item Name</th>
            <th>Type</th>
            <th>Interaction</th>
            <th>Interaction Modes</th>
            <th>Width</th>
            <th>Length</th>
            <th>Stack Height</th>
            <th>Can Stack</th>
            <th>Inventory Stacks</th>
            <th>Can Sit</th>
            <th>Can Walk</th>
            <th>Can Gift</th>
            <th>Can Trade</th>
            <th>Can Recycle</th>
            <th>Can Sell</th>
          </tr>
        </thead>
        <tbody>
          {items().map((_, index) => (
            <tr onClick={() => navigate(`/furniture/1`)}>
              <td>{_.publicName}</td>
              <td>{_.itemName}</td>
              <td>{_.type}</td>
              <td>{_.interactionType}</td>
              <td>{_.interactionModesCount}</td>
              <td>{_.width}</td>
              <td>{_.length}</td>
              <td>{_.stackHeight}</td>
              <td>{_.allowStack}</td>
              <td>{_.allowInventoryStack}</td>
              <td>{_.allowSit}</td>
              <td>{_.allowWalk}</td>
              <td>{_.allowGift}</td>
              <td>{_.allowTrade}</td>
              <td>{_.allowRecycle}</td>
              <td>{_.allowMarketplaceSell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </UserLayout>
  );
}

export default FurnitureListScreen;
