import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ChatbotUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await fetch(
        `https://icqjpq0l0k.execute-api.ap-south-1.amazonaws.com/dev/chat?message=${encodeURIComponent(input)}&session_id=12345`
      );
      const data = await response.json();
      const botMessage = { text: data.response, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4">
      <motion.div
        className="w-full max-w-lg bg-gray-900 p-6 rounded-2xl shadow-xl border-4 border-neon-purple"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-neon-purple text-center">
          Neon Chatbot
        </h1>
        <div className="mt-4 h-80 overflow-y-auto p-2 border-2 border-neon-purple rounded-lg">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`my-2 p-2 rounded-lg max-w-xs ${
                msg.sender === "user"
                  ? "bg-neon-purple ml-auto"
                  : "bg-gray-700 mr-auto"
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            className="flex-1 p-3 rounded-lg bg-gray-800 text-white border-2 border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="p-3 bg-neon-purple rounded-lg hover:bg-neon-purple-dark transition"
            onClick={sendMessage}
          >
            <Send size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
