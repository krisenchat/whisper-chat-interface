"use client";

import { useEffect, useState } from "react";
import { MessageInput } from "./message-input";
import { MessageList } from "./message-list";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  userId?: string;
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey! How are you doing?",
      sender: "other",
      userId: "Anonymous 617888",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: "2",
      text: "I'm doing great, thanks for asking!",
      sender: "user",
      timestamp: new Date(Date.now() - 3000000),
    },
    {
      id: "3",
      text: "What are you working on today?",
      sender: "other",
      userId: "Anonymous 617888",
      timestamp: new Date(Date.now() - 2400000),
    },
  ]);

  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    // Generate random user id after component mounts to avoid hydration mismatch
    setUserId(Math.floor(100000 + Math.random() * 900000).toString());
  }, []);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex h-full w-full flex-col bg-background">
      <header className="flex items-center border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="text-sm font-medium">A</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-medium text-foreground">
              {userId ? `Anonymous ${userId}` : "Anonymous"}
            </h1>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
      </header>

      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}
