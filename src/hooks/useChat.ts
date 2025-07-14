import { useState } from "react";

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(content),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  return {
    messages,
    isTyping,
    sendMessage,
  };
};

// Simple AI response simulation
const generateAIResponse = (userMessage: string): string => {
  const responses = [
    "That's an interesting question! Let me help you with that.",
    "I understand what you're asking. Here's my perspective:",
    "Great point! I'd be happy to assist you with this.",
    "Thanks for sharing that. Let me provide some insights:",
    "I see what you mean. Here's what I think about that:",
  ];

  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
  // Add some context-aware responses
  if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
    return "Hello! It's great to meet you. What would you like to talk about today?";
  }
  
  if (userMessage.toLowerCase().includes("help")) {
    return "I'm here to help! I can assist with answering questions, providing explanations, helping with writing, offering creative ideas, and much more. What specific topic would you like help with?";
  }
  
  if (userMessage.toLowerCase().includes("code") || userMessage.toLowerCase().includes("programming")) {
    return "I'd be happy to help with coding! I can assist with various programming languages, debugging, explaining concepts, or reviewing code. What programming challenge are you working on?";
  }
  
  if (userMessage.toLowerCase().includes("write") || userMessage.toLowerCase().includes("writing")) {
    return "I love helping with writing! Whether it's creative writing, essays, emails, or any other type of content, I can help you brainstorm, structure, and refine your ideas. What kind of writing project are you working on?";
  }

  return `${randomResponse} You mentioned: "${userMessage}". This is a simulated response to demonstrate the chat interface. In a real implementation, this would connect to an actual AI service like OpenAI's GPT API.`;
};