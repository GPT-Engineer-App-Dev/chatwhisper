import React, { useState } from 'react';
import { Search, MoreVertical, Send } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const WhatsAppClone = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');

  const chats = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Can we meet tomorrow?', time: '9:45 AM' },
    { id: 3, name: 'Bob Johnson', lastMessage: 'Don\'t forget the meeting!', time: 'Yesterday' },
  ];

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/3 bg-white border-r">
        <div className="p-4 bg-gray-200 flex justify-between items-center">
          <img src="/placeholder.svg" alt="Profile" className="w-10 h-10 rounded-full" />
          <div className="flex space-x-4">
            <Search className="text-gray-600" />
            <MoreVertical className="text-gray-600" />
          </div>
        </div>
        <ScrollArea className="h-full">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 hover:bg-gray-100 cursor-pointer ${
                selectedChat?.id === chat.id ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleChatSelect(chat)}
            >
              <div className="flex items-center">
                <img src="/placeholder.svg" alt={chat.name} className="w-12 h-12 rounded-full mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold">{chat.name}</h3>
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                </div>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <div className="p-4 bg-gray-200 flex items-center">
              <img src="/placeholder.svg" alt={selectedChat.name} className="w-10 h-10 rounded-full mr-4" />
              <h2 className="font-semibold">{selectedChat.name}</h2>
            </div>
            <ScrollArea className="flex-1 p-4">
              {/* Chat messages would go here */}
              <div className="text-center text-gray-500 my-4">
                Messages with {selectedChat.name} will appear here
              </div>
            </ScrollArea>
            <div className="p-4 bg-gray-200 flex items-center">
              <Input
                type="text"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 mr-4"
              />
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppClone;