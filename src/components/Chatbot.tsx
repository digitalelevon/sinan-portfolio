"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import Image from "next/image";

type Message = {
    role: "user" | "assistant" | "system";
    content: string;
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm DigiBot, an AI assistant. How can I help you today? Are you looking for web development, SEO, or digital marketing services?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isLoading, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userText = input.trim();
        const userMessage = { role: "user" as const, content: userText };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");

        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!res.ok) throw new Error("Failed to fetch response");
            const data = await res.json();

            if (data.message) {
                setMessages((prev) => [...prev, data.message]);
            }
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            {isOpen ? (
                <div className="bg-black/95 backdrop-blur-md border border-yellow-500/30 w-[calc(100vw-2rem)] sm:w-[380px] h-[calc(100dvh-2rem)] max-h-[600px] sm:h-[600px] sm:max-h-[calc(100vh-6rem)] rounded-2xl shadow-2xl shadow-yellow-500/10 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-black to-zinc-900 border-b border-yellow-500/30 p-3 sm:p-4 flex justify-between items-center z-10">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-sm shadow-yellow-500/20 shrink-0 overflow-hidden">
                                <Image src="/chatbot-icon.svg" alt="Chatbot" width={48} height={48} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-sm">
                                    AI Assistant
                                    <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-500"></span>
                                    </span>
                                </h3>
                                <p className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5">Sinan MC Malappuram</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full">
                            <X size={18} className="sm:w-5 sm:h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col scroll-smooth">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[85%] p-3.5 rounded-2xl text-[14px] sm:text-[15px] leading-relaxed relative whitespace-pre-wrap ${msg.role === "user"
                                    ? "bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-tr-sm shadow-sm"
                                    : "bg-zinc-800/80 border border-zinc-700/50 text-zinc-100 rounded-tl-sm shadow-sm"
                                    }`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-zinc-800/80 border border-zinc-700/50 p-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center w-fit shadow-sm">
                                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} className="h-2" />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 border-t border-yellow-500/20 bg-black">
                        <form onSubmit={handleSubmit} className="relative flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Message the AI..."
                                className="w-full bg-zinc-900 border border-zinc-800 text-white text-[16px] sm:text-sm rounded-full pl-4 pr-12 py-3.5 focus:border-yellow-500/50 outline-none transition-colors placeholder:text-zinc-500 shadow-inner"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="absolute right-1.5 w-10 h-10 flex items-center justify-center bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:bg-zinc-700 disabled:text-zinc-400 disabled:cursor-not-allowed shadow-sm"
                            >
                                <Send size={16} className="-ml-0.5" />
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-300 group relative focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 z-50 animate-in fade-in zoom-in-95"
                >
                    {/* Continuous subtle pulse for attention */}
                    <div className="absolute inset-0 rounded-full bg-yellow-500/20 animate-ping opacity-60 [animation-duration:3s]"></div>
                    <Image src="/chatbot-icon.svg" alt="Chat" width={64} height={64} className="w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
                </button>
            )}
        </div>
    );
}
