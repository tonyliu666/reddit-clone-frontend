import { SidebarSection, SidebarItem } from "./NavigationSection";

export default function ChatBotSection({
    expanded,
    onToggle,
}: {
    expanded: boolean;
    onToggle: () => void;
}) {
    return (
        <SidebarSection title="CHATBOT" expanded={expanded} onToggle={onToggle}>
            <div className="mt-2 space-y-2">
                <SidebarItem icon="🤖" label="Ask AI" />
                <SidebarItem icon="💬" label="Chat History" />
            </div>
        </SidebarSection>
    );
}
