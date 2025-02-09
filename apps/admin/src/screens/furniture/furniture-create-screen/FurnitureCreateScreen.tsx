import { SiteTitle } from "@crabshell/shared-web";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { FurnitureEditor } from "../furniture-editor/FurnitureEditor";

export function FurnitureCreateScreen() {
  return (
    <UserLayout>
      <SiteTitle>Create Furniture</SiteTitle>
      <FurnitureEditor />
    </UserLayout>
  );
}

export default FurnitureCreateScreen;
