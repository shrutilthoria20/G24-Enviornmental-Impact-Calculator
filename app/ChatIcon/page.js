// Chat Icon Component
import React from 'react';

function ChatIcon({ onClick }) {
  return (
    <div className="fixed bottom-0 right-0 mr-8 mb-8 z-50">
  <div className="h-16 w-16 cursor-pointer" onClick={onClick}>
    <img src="/chatbot.png" alt="Chat Icon" />
  </div>
</div>
  );
}

export default ChatIcon;
