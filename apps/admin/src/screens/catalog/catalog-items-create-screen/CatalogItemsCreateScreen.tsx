import toast from "solid-toast";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { CatalogItemsEditor } from "../catalog-items-editor/CatalogItemsEditor";

export function CatalogItemsCreateScreen() {
  async function onCreate(dto: any) {
    toast.success("created");
  }
  return (
    <UserLayout>
      <SiteTitle>Catalog Items - Create</SiteTitle>
      <h1>Catalog Items</h1>
      <CatalogItemsEditor onSave={onCreate} />
    </UserLayout>
  );
}

export default CatalogItemsCreateScreen;
