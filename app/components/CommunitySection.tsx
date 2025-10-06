import { useState } from "react";
import { Plus } from "lucide-react";
import { SidebarSection, SidebarAction, SidebarItem } from "./NavigationSection";
import CreateCommunityModal from "./CommunityList"; // import your modal

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
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SidebarSection title="COMMUNITIES" expanded={expanded} onToggle={onToggle}>
        <SidebarAction
          icon={<Plus />}
          label="Create Community"
          onClick={() => setShowModal(true)}   // 👈 open modal
        />
        <SidebarAction icon="⚙️" label="Manage Communities" />
        <div className="mt-2 space-y-2">
          {communities.map((c) => (
            <SidebarItem key={c.id} icon={c.icon} label={c.name} />
          ))}
        </div>
      </SidebarSection>

      {/* Conditionally render modal */}
      {showModal && <CreateCommunityModal onClose={() => setShowModal(false)} />}
    </>
  );
}
