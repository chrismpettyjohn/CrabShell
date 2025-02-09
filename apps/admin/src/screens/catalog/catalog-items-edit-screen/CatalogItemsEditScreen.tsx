import toast from "solid-toast";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { CatalogItemsEditor } from "../catalog-items-editor/CatalogItemsEditor";

export function CatalogItemsEditScreen() {
  async function onSave(dto: any) {
    toast.success("saved");
  }

  return (
    <UserLayout>
      <SiteTitle>Catalog Items - Edit</SiteTitle>
      <h1>Catalog Items</h1>
      <CatalogItemsEditor onSave={onSave} />
    </UserLayout>
  );
}

export default CatalogItemsEditScreen;
