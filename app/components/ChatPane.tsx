import { useState, useEffect, useRef } from "react";
import { X, Send, Bot, User } from "lucide-react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

interface Message {
    role: "user" | "bot";
    text: string;
    sender?: string;
    content?: string;
}

export default function ChatPane({ onClose }: { onClose: () => void }) {
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", text: "Hello! I'm your AI assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const stompClientRef = useRef<Client | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const socket = new SockJS("http://localhost:8080/ws");
        const client = new Client({
            webSocketFactory: () => socket,
            debug: (str) => console.log("STOMP: " + str),
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        });

        client.onConnect = () => {
            console.log("Connected to WebSocket");
            client.subscribe("/topic/messages", (message) => {
                const payload = JSON.parse(message.body);
                setMessages((prev) => [
                    ...prev,
                    {
                        role: payload.sender === "You" ? "user" : "bot",
                        text: payload.content || payload.text || ""
                    }
                ]);
            });
            console.log("Subscribed to /topic/messages");
        };

        client.onStompError = (frame) => {
            console.error("STOMP error", frame.headers["message"]);
        };

        client.activate();
        stompClientRef.current = client;

        return () => {
            client.deactivate();
        };
    }, []);

    const handleSend = () => {
        if (!input.trim() || !stompClientRef.current?.connected) return;

        const chatMessage = {
            sender: "You",
            content: input,
            type: "CHAT"
        };
        console.log("Sending message:", chatMessage);

        stompClientRef.current.publish({
            destination: "/app/messages/chat",
            body: JSON.stringify(chatMessage),
        });

        setInput("");
    };

    return (
        <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Bot size={24} className="text-blue-100" />
                    <h3 className="font-semibold text-lg">AI Assistant</h3>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl flex gap-2 ${m.role === "user"
                            ? "bg-blue-600 text-white rounded-tr-none"
                            : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none"
                            }`}>
                            {m.role === "bot" && <Bot size={16} className="shrink-0 mt-1 opacity-70" />}
                            <p className="text-sm leading-relaxed">{m.text}</p>
                            {m.role === "user" && <User size={16} className="shrink-0 mt-1 opacity-70" />}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Type a message..."
                        className="w-full pl-4 pr-12 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <button
                        onClick={handleSend}
                        className="absolute right-2 top-1.5 p-1.5 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
