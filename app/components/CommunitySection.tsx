import { useState } from "react";
import { Plus } from "lucide-react";
import { SidebarSection, SidebarAction, SidebarItem } from "./NavigationSection";
import CreateCommunityModal from "./CommunityList"; // import your modal

interface Community {
  id: string;
  name: string;
  description?: string;
  bannerImage?: string;
  iconImage?: string;
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
          onClick={() => setShowModal(true)}  
        />
        <SidebarAction icon="⚙️" label="Manage Communities" />
        <div className="mt-2 space-y-2">
          {communities.map((c) => (
            <p> {c.name}  {c.id} {c.description} {c.bannerImage} {c.iconImage}</p>
          ))}
        </div>
      </SidebarSection>

      {showModal && <CreateCommunityModal onClose={() => setShowModal(false)} />}
    </>
  );
}
