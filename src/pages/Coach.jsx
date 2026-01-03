import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Coach = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your accountability coach. What's your main goal for today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "That sounds actionable. How will you measure success?",
                "Great focus. Remember to take breaks!",
                "I've logged that for you. Keep up the momentum.",
                "Consistency is key. You're doing great.",
                "Have you considered breaking that down into smaller steps?"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            setMessages(prev => [...prev, { id: Date.now() + 1, text: randomResponse, sender: 'bot' }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="h-[calc(100vh-2rem)] flex flex-col animate-fade-in relative z-10 glass-panel">

            <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-white/5">
                <div className="p-2 bg-primary rounded-lg">
                    <Bot size={20} className="text-white" />
                </div>
                <div>
                    <h2 className="font-bold">AI Coach</h2>
                    <p className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Online
                    </p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`
              max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed
              ${msg.sender === 'user'
                                ? 'bg-primary text-white rounded-tr-none'
                                : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'}
            `}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none flex gap-1">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    </div>
                )}
                <div ref={bottomRef} />
            </div>

            <div className="p-4 border-t border-white/10 bg-white/5">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your update..."
                        className="flex-1 bg-black/20 border-white/10 focus:border-primary focus:ring-0"
                    />
                    <button
                        onClick={handleSend}
                        className="p-3 bg-primary rounded-lg text-white hover:bg-primary-glow transition-all"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Coach;
