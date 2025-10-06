import { Plus } from "lucide-react";
import { SidebarSection, SidebarAction, SidebarItem } from "./NavigationSection";

interface Community {
  id: string;
  name: string;
  icon?: string;
}

export default function CommunitiesSection({
  communities,
  expanded,
  onToggle,
}: {
  communities: Community[];
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <SidebarSection title="COMMUNITIES" expanded={expanded} onToggle={onToggle}>
      <SidebarAction icon={<Plus />} label="Create Community" />
      <SidebarAction icon="⚙️" label="Manage Communities" />
      <div className="mt-2 space-y-2">
        {communities.map((c) => (
          <SidebarItem key={c.id} icon={c.icon} label={c.name} />
        ))}
      </div>
    </SidebarSection>
  );
}
