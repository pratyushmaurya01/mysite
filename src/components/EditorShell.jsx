
import EditorLayout from "./EditorLayout";

export default function EditorShell({ children }) {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <EditorLayout>{children}</EditorLayout>
    </div>
  );
}
