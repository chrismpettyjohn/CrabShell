import toast from "solid-toast";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { CatalogItemsEditor } from "../catalog-items-editor/CatalogItemsEditor";
import { SiteTitle } from "@crabshell/shared-web";

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
