import { UserLayout } from "../../../components/user-layout/UserLayout";
import { FurnitureEditor } from "../furniture-editor/FurnitureEditor";

export function FurnitureCreateScreen() {
  return (
    <UserLayout>
      <FurnitureEditor />
    </UserLayout>
  );
}

export default FurnitureCreateScreen;
