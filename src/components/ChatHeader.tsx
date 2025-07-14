import { MessageCircle, Sparkles } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="border-b border-border bg-background-secondary/50 backdrop-blur-sm p-4">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="relative">
            <MessageCircle className="h-6 w-6 text-primary" />
            <Sparkles className="h-3 w-3 text-primary-glow absolute -top-1 -right-1" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              AI Chat Assistant
            </h1>
            <p className="text-sm text-muted-foreground">
              Your intelligent conversation partner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;