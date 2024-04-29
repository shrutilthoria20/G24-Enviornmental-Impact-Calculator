// Chat Icon Component
"use client";
import React from 'react';

function ChatIcon({ onClick =()=>{}}) {
  return (
//     <div className="fixed bottom-0 right-0 mr-8 mb-8 z-50">
//   <div className="h-16 w-16 cursor-pointer" onClick={onClick}>
//     <img src="/chatbot.png" alt="Chat Icon" />
//   </div>
// </div>
    <div className="fixed bottom-8 md:bottom-10 right-0 mr-8 mb-8 z-50 flex flex-col items-center">
  <p className="mb-2 bg-white">Chat Assistant</p>
  <img src="/icons8-chat-bot.gif" alt="Chat Icon" className="h-16 w-16" onClick={onClick} />
</div>
  );
}

export default ChatIcon;
