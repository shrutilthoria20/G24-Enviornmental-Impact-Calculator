// pages/index.js
"use client";
import React, { useState } from 'react';

function Chatbot({ onClose }) {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add user input to chat history
    setChatHistory((prevChat) => [...prevChat, { role: 'user', content: userInput }]);
    console.log("input",userInput);
    // Fetch response from API
    const response = await fetch('/api/bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    console.log("Data",data.message);

    // Add response to chat history
    setChatHistory((prevChat) => [...prevChat, { role: 'bot', content: data.message }]);

    // Clear input field
    setUserInput('');
  };

  return (
    <div className="fixed bottom-0 right-0 mr-8 mb-8 z-50 ">
  <div className="container mx-auto max-w-lg p-4 bg-gray-50 rounded-lg border border-gray-300">
    <div className="flex justify-between items-center mb-2">
      <h1 className="text-xl font-bold">Chatbot Assistant</h1>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div className="max-h-64 overflow-y-auto mb-4">
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex justify-${message.role === 'user' ? 'start' : 'end'} mb-2`}
        >
          <div
            className={`rounded-full p-2 ${
              message.role === 'user' ? 'bg-blue-300 text-blue-800' : 'bg-green-300 text-green-800'
            }`}
          >
            {message.role === 'user' ? 'You' : 'Bot'}
          </div>
          <div
            className={`ml-2 ${
              message.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
            } p-2 rounded-md`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ask me something..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="w-full p-2 rounded-lg border border-gray-300"
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
      >
        Ask
      </button>
    </form>
  </div>
</div>

  );
}
export default Chatbot;
