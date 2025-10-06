import { useState } from "react";
import { Plus } from "lucide-react";
import NavigationSection, { SidebarAction, SidebarItem, SidebarSection } from "./NavigationSection";
import CommunitiesSection from "./CommunitySection";
import CustomFeedsSection from "./CustomFeedSection";
import RecentSection from "./RecentSection";

interface Community {
  id: string;
  name: string;
  icon?: string;
}

export default function Sidebar() {
  const [showNavigation, setShowNavigation] = useState(true);
  const [showCommunities, setShowCommunities] = useState(true);
  const [showCustomFeeds, setShowCustomFeeds] = useState(true);
  const [showRecent, setShowRecent] = useState(true);

  const communities: Community[] = [
    { id: "1", name: "r/CryptoTechnology", icon: "💰" },
    { id: "2", name: "r/docker", icon: "🐳" },
    { id: "3", name: "r/eBPF", icon: "🐝" },
    { id: "4", name: "r/FlutterDev", icon: "📱" },
  ];

  const recent: Community[] = [
    { id: "5", name: "r/buildapc", icon: "🖥️" },
    { id: "6", name: "r/SideProject", icon: "🚀" },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r p-4 space-y-6 overflow-y-auto">
      <NavigationSection expanded={showNavigation} onToggle={() => setShowNavigation(!showNavigation)} />

      <CommunitiesSection communities={communities} expanded={showCommunities} onToggle={() => setShowCommunities(!showCommunities)} />

      <CustomFeedsSection expanded={showCustomFeeds} onToggle={() => setShowCustomFeeds(!showCustomFeeds)} />

      <RecentSection recent={recent} expanded={showRecent} onToggle={() => setShowRecent(!showRecent)} />
    </div>
  );
}






