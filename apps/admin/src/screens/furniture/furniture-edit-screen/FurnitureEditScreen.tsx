import { useParams } from "@solidjs/router";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { FurnitureEditor } from "../furniture-editor/FurnitureEditor";
import { SiteTitle } from "../../../components/site-title/SiteTitle";

export function FurnitureEditScreen() {
  const { baseItemId } = useParams();
  return (
    <UserLayout>
      <SiteTitle>Edit Furniture</SiteTitle>
      hi {baseItemId}
      <FurnitureEditor />
    </UserLayout>
  );
}

export default FurnitureEditScreen;
