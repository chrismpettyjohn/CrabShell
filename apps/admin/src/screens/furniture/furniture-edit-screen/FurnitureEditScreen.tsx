import { useParams } from "@solidjs/router";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { FurnitureEditor } from "../furniture-editor/FurnitureEditor";

export function FurnitureEditScreen() {
  const { baseItemId } = useParams();
  return (
    <UserLayout>
      hi {baseItemId}
      <FurnitureEditor />
    </UserLayout>
  );
}

export default FurnitureEditScreen;
