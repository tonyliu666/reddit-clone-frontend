import { SidebarSection, SidebarItem } from "./NavigationSection";

export default function ChatBotSection({
    expanded,
    onToggle,
    onAskAI,
}: {
    expanded: boolean;
    onToggle: () => void;
    onAskAI?: () => void;
}) {
    return (
        <SidebarSection title="CHATBOT" expanded={expanded} onToggle={onToggle}>
            <div className="mt-2 space-y-2">
                <div onClick={onAskAI} className="cursor-pointer">
                    <SidebarItem icon="🤖" label="Ask AI" />
                </div>
                <SidebarItem icon="💬" label="Chat History" />
            </div>
        </SidebarSection>
    );
}
