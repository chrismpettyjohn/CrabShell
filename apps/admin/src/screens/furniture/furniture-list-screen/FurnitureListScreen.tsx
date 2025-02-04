import { useNavigate } from "@solidjs/router";
import { UserLayout } from "../../../components/user-layout/UserLayout";

export function FurnitureListScreen() {
  const navigate = useNavigate();
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
          {Array.from({ length: 10 }).map((_, index) => (
            <tr onClick={() => navigate(`/furniture/1`)}>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </UserLayout>
  );
}

export default FurnitureListScreen;
