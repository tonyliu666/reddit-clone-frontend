import { ChevronDown, ChevronRight } from "lucide-react";

export default function NavigationSection({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  return (
    <SidebarSection
      title="NAVIGATION"
      expanded={expanded}
      onToggle={onToggle}
    >
      <div className="space-y-1">
        <SidebarItem icon="🏠" label="Home" />
        <SidebarItem icon="⭐" label="Popular" />
        <SidebarItem icon="🔍" label="Explore" />
        <SidebarItem icon="📊" label="All" />
      </div>
    </SidebarSection>
  );
}

export function SidebarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100/80 rounded-lg px-2 py-2 text-sm text-gray-700 font-medium transition-colors group">
      <span className="text-lg group-hover:scale-110 transition-transform">{icon}</span>
      <span className="group-hover:text-blue-600 transition-colors">{label}</span>
    </div>
  );
}

export function SidebarSection({
  title,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-indigo-600 font-bold text-[11px] uppercase tracking-[0.1em] px-2"
      >
        {title}
        <div className="text-indigo-400">
          {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </div>
      </button>
      {expanded && <div className="pl-2 mt-2">{children}</div>}
    </div>
  );
}

export function SidebarAction({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;   // 👈 allow optional onClick
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-blue-600 text-sm font-medium hover:underline"
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}
