export interface BansEditorProps {
  defaultBan?: any;
  onSave(dto: any): void;
}

export function BansEditor({ defaultBan, onSave }: BansEditorProps) {
  function onSubmit(event: Event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={onSave}>
      <h2>Username</h2>
    </form>
  );
}
