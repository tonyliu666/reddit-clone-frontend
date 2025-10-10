import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Settings, Star } from "lucide-react";
import { SidebarSection, SidebarAction, SidebarItem } from "./NavigationSection";
import CreateCommunityModal from "./CommunityList"; // import your modal
import type { Community } from "../types/types";


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
          icon={<Plus className="w-4 h-4" />}
          label="Create Community"
          onClick={() => setShowModal(true)}
        />
        <SidebarAction icon={<Settings className="w-4 h-4" />} label="Manage Communities" />

        <div className="mt-3 space-y-1">
          {communities.map((c) => (
            <Link
              key={c.name}
              to={`/r/${c.name}`}
              state={{
                iconImageBytes: c.iconImageBytes,
                bannerImageBytes: c.bannerImageBytes,
                description: c.description,
              }}
              className="flex items-center justify-between hover:bg-gray-100 rounded-md px-2 py-1 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                {c.iconImageBytes ? (
                  <img
                    src={`data:image/png;base64,${c.iconImageBytes}`}
                    alt={`${c.name} icon`}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-gray-200" />
                )}
                <span className="text-sm text-gray-800 font-medium truncate">
                  r/{c.name}
                </span>
              </div>
              <Star size={16} className="text-gray-500 hover:text-yellow-500" />
            </Link>
          ))}
        </div>
      </SidebarSection>

      {showModal && <CreateCommunityModal onClose={() => setShowModal(false)} />}
    </>
  );
}