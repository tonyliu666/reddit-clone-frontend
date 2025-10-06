import { ChevronDown, ChevronRight } from "lucide-react";

export default function NavigationSection({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  return (
    <SidebarSection
      title="NAVIGATION"
      expanded={expanded}
      onToggle={onToggle}
    >
      <div className="space-y-3 text-yellow-600">
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
    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded px-2 py-1 text-sm">
      <span>{icon}</span>
      <span>{label}</span>
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
        className="flex items-center justify-between w-full text-gray-500 font-semibold text-sm"
      >
        {title}
        {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
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
