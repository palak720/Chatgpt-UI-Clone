import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css"; // Import CSS

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(() => JSON.parse(localStorage.getItem("chatHistory")) || []);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
    chatBoxRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: "user" }, { text: "Hello! How can I help you today?", sender: "bot" }];
    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="chat-container">
      <header>
        <img src="https://img.freepik.com/premium-vector/login-icon-vector_942802-6299.jpg?w=900" alt="Logo" className="logo" />
        <button onClick={() => { localStorage.removeItem("user"); navigate("/"); }}>Logout</button>
      </header>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={chatBoxRef}></div>
      </div>
      <footer>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </footer>
    </div>
  );
};

export default ChatPage;
