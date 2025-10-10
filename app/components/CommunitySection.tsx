import { useState } from "react";
import { Plus } from "lucide-react";
import { SidebarSection, SidebarAction, SidebarItem } from "./NavigationSection";
import CreateCommunityModal from "./CommunityList"; // import your modal

interface Community {
  name: string;
  description?: string;
  bannerImageBytes?: string;
  iconImageBytes?: string;
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
            <div key={c.name}>
              <h3>{c.name}</h3>
              <p>{c.description}</p>

              {c.bannerImageBytes && (
                <img
                  src={`data:image/png;base64,${c.bannerImageBytes}`}
                  alt={`${c.name} banner`}
                  className="w-48 h-32 object-cover"
                />
              )}

              {c.iconImageBytes && (
                <img
                  src={`data:image/png;base64,${c.iconImageBytes}`}
                  alt={`${c.name} icon`}
                  className="w-16 h-16 object-cover"
                />
              )}
            </div>
          ))}
        </div>

      </SidebarSection>

      {showModal && <CreateCommunityModal onClose={() => setShowModal(false)} />}
    </>
  );
}
