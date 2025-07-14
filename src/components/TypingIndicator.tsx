import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TypingIndicator = () => {
  return (
    <div className="flex gap-3 p-4 message-fade-in">
      <Avatar className="h-8 w-8 flex-shrink-0">
        <AvatarFallback className="bg-accent text-accent-foreground text-sm font-medium">
          AI
        </AvatarFallback>
      </Avatar>
      
      <div className="bg-ai-message border border-message-border rounded-lg px-4 py-3 message-shadow">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-muted-foreground rounded-full typing-dots" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full typing-dots" style={{ animationDelay: '200ms' }}></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full typing-dots" style={{ animationDelay: '400ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;