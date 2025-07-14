import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex gap-3 p-4 message-fade-in transition-smooth",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Avatar className="h-8 w-8 flex-shrink-0">
        <AvatarFallback 
          className={cn(
            "text-sm font-medium",
            isUser 
              ? "bg-primary text-primary-foreground" 
              : "bg-accent text-accent-foreground"
          )}
        >
          {isUser ? "U" : "AI"}
        </AvatarFallback>
      </Avatar>
      
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-3 message-shadow transition-smooth",
          isUser
            ? "bg-user-message border border-message-border"
            : "bg-ai-message border border-message-border"
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message}
        </p>
        <time className="text-xs text-muted-foreground mt-2 block">
          {timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </time>
      </div>
    </div>
  );
};

export default ChatMessage;