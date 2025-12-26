import TopBar from "./TopBar";

export default function EditorLayout({ children }) {
  return (
    <div className="flex flex-col flex-1 overflow-hidden bg-[#1e1e1e]">
      
      {/* Tabs bar — NEVER moves */}
      <div className="h-10 shrink-0 border-b border-[#2a2d2e] bg-[#252526]">
        <TopBar />
      </div>

      {/* ONLY SCROLL AREA */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

    </div>
  );
}
