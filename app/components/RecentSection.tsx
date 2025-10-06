import { SidebarSection, SidebarItem } from "./NavigationSection";

interface Community {
  id: string;
  name: string;
  icon?: string;
}

export default function RecentSection({
  recent,
  expanded,
  onToggle,
}: {
  recent: Community[];
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <SidebarSection title="RECENT" expanded={expanded} onToggle={onToggle}>
      <div className="mt-2 space-y-2">
        {recent.map((c) => (
          <SidebarItem key={c.id} icon={c.icon} label={c.name} />
        ))}
      </div>
    </SidebarSection>
  );
}
