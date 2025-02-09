import { onCleanup, onMount } from "solid-js";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export interface WYSIWYGEditorProps {
  content: string;
  onChange(content: string): void;
}

export function WYSIWYGEditor({ content, onChange }: WYSIWYGEditorProps) {
  let editorRef: HTMLDivElement | undefined;
  let quillInstance: Quill | null = null;

  onMount(() => {
    if (editorRef) {
      quillInstance = new Quill(editorRef, {
        theme: "snow",
        placeholder: "Write something...",
      });

      quillInstance.root.innerHTML = content;

      quillInstance.on("text-change", () => {
        onChange(quillInstance!.root.innerHTML);
      });
    }
  });

  onCleanup(() => {
    quillInstance = null;
  });

  return (
    <div>
      <div ref={editorRef} style="height: 450px;"></div>
    </div>
  );
}
