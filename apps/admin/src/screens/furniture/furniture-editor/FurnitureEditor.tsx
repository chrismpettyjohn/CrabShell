export interface FurnitureEditorProps {}

export function FurnitureEditor({}: FurnitureEditorProps) {
  function onSubmit(event: Event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <p>i got black i got white what u want</p>
    </form>
  );
}
