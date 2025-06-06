"use client";
import { useState, useEffect } from "react";
import { SendHorizonal, Bot, X } from "lucide-react";

export default function AgentChat() {
    
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setResponse('Loading...')
        const responseFromLangchain=await fetch('/api/agent',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({question:input})
        })
        const ext=await responseFromLangchain.json();
        setResponse(ext.response.kwargs.content);
        setInput("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      const timeout = setTimeout(() => {
        setShowPopup(false);
      }, 5000); // Hide after 5 seconds

      return () => clearTimeout(timeout);
    }, 20000); // Show every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating 3D Logo Button */}
      {!isOpen && (
        <div className="fixed bottom-5 left-5 md:bottom-10 md:left-10 z-50 flex flex-col items-start space-y-2">
          {/* Popup Message */}
          {showPopup && (
            <div className="mb-2 px-3 py-2 bg-white text-black text-sm rounded-lg shadow-lg animate-fadeIn border border-purple-300">
              Ask anything to the AI about me!
            </div>
          )}
          <button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer p-4 rounded-full bg-gradient-to-br from-pink-700 to-purple-800 shadow-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 backdrop-blur-md border border-white/10"
            aria-label="Open AI Chat"
          >
            <Bot className="text-white w-4 h-4 md:w-7 md:h-7 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]"/>
          </button>
        </div>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-5 left-5 md:bottom-10 md:left-10 z-50 w-[90vw] max-w-md bg-black text-white border border-purple-800 rounded-2xl shadow-2xl flex flex-col animate-fadeIn">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-purple-800">
            <h2 className="text-pink-600 font-semibold text-lg md:text-xl">Ask my assistant about me</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-purple-500 hover:text-pink-500 transition"
              aria-label="Close Chat"
            >
              <X size={28} className="cursor-pointer"/>
            </button>
          </div>

          {/* Response Area */}
          <div className="p-4 h-96 overflow-y-auto text-sm md:text-lg">
            {response ? (
              <p className="text-purple-300">{response}</p>
            ) : (
              <p className="text-gray-500 italic">Response will be shown here...</p>
            )}
          </div>

          {/* Input Area */}
          <div className="flex border-t border-purple-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type anything to ask..."
              className="flex-1 bg-black text-white px-4 py-3 text-sm focus:outline-none placeholder-gray-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-pink-700 hover:bg-purple-700 text-white px-4 flex items-center justify-center"
              aria-label="Send Message"
            >
              <SendHorizonal size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
