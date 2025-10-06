import { Plus } from "lucide-react";
import { SidebarSection, SidebarAction } from "./NavigationSection";

export default function CustomFeedsSection({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <SidebarSection title="CUSTOM FEEDS" expanded={expanded} onToggle={onToggle}>
      <SidebarAction icon={<Plus />} label="Create Custom Feed" />
    </SidebarSection>
  );
}
