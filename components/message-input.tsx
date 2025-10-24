"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

interface MessageInputProps {
  onSendMessage: (text: string) => void;
}

export function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const isValidMessage = message.trim().length > 0;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isValidMessage) {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a slight delay for better UX
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <footer className="border-t border-border p-4">
      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        <label htmlFor="message-input" className="sr-only">
          Type your message
        </label>
        <Textarea
          id="message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          placeholder="Type a message..."
          className="min-h-10 max-h-32 flex-1 resize-none"
          rows={1}
        />
        <Button
          type="submit"
          size="icon"
          className="h-10 w-10 shrink-0"
          disabled={!isValidMessage}
          aria-label="Send message"
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </footer>
  );
}
