export interface CatalogItemsEditorProps {
  defaultCatalogItem?: any;
  onSave(dto: any): void;
}

export function CatalogItemsEditor({
  defaultCatalogItem,
  onSave,
}: CatalogItemsEditorProps) {
  function onSubmit() {
    alert("ok");
  }
  return (
    <form onSubmit={onSubmit}>
      <h2>Public Name</h2>
      <input name="publicName" type="text" />
      <div style="display:flex;justify-content:flex-end;width:100%;margin-top:auto;">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
