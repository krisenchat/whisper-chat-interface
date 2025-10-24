import type { Message } from "./chat-interface"

interface MessageBubbleProps {
  message: Message
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === "user"

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <article className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`flex max-w-[85%] flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={`rounded-lg px-4 py-2 ${
            isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
          }`}
        >
          <p className="text-sm leading-relaxed text-balance">{message.text}</p>
        </div>
        <time className="text-xs text-muted-foreground">{formatTime(message.timestamp)}</time>
      </div>
    </article>
  )
}
