"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

interface MessageInputProps {
  onSendMessage: (text: string) => void
}

export function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage("")
    }
  }

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
              e.preventDefault()
              handleSubmit(e)
            }
          }}
          placeholder="Type a message..."
          className="min-h-[2.5rem] max-h-32 flex-1 resize-none"
          rows={1}
        />
        <Button
          type="submit"
          size="icon"
          className="h-10 w-10 shrink-0"
          disabled={!message.trim()}
          aria-label="Send message"
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </footer>
  )
}
