import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Send,
  Mic,
  Globe,
  Bot,
  User,
  Settings,
  Languages,
  Video,
  Phone,
  Smile
} from 'lucide-react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  language?: string;
}

const ChatHub: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const languages = ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        content: inputMessage,
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 2,
          content: `I understand you said: "${inputMessage}". How can I assist you further?`,
          sender: 'ai',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Simulate voice recognition
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setInputMessage("Voice message transcribed");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center">
                <MessageSquare className="w-10 h-10 mr-4 text-blue-400" />
                ChatHub
              </h1>
              <p className="text-gray-300 text-lg">
                Unified messaging with AI assistant and real-time translation
              </p>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white pr-8 focus:outline-none focus:border-blue-500"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang} className="bg-gray-800">
                      {lang}
                    </option>
                  ))}
                </select>
                <Languages className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 smooth-transition"
              >
                <Settings className="w-5 h-5 text-gray-400" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-dark rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Conversations</h2>
            
            {/* AI Assistant */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 mb-4 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">AI Assistant</div>
                  <div className="text-xs text-gray-400">Always available</div>
                </div>
              </div>
            </motion.div>

            {/* Global Chat Rooms */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                Global Rooms
              </h3>
              
              {['General Discussion', 'Tech Talk', 'Creative Corner', 'Study Group'].map((room, index) => (
                <motion.div
                  key={room}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 smooth-transition cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">{room}</span>
                    <span className="text-xs text-green-400">● {Math.floor(Math.random() * 50) + 10}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 space-y-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full p-3 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30 flex items-center justify-center space-x-2"
              >
                <Video className="w-4 h-4" />
                <span>Video Call</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full p-3 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Voice Call</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-dark rounded-2xl overflow-hidden h-[600px] flex flex-col"
            >
              {/* Chat Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ scale: isListening ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 1, repeat: isListening ? Infinity : 0 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center glow-blue"
                    >
                      <Bot className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-white font-semibold">AI Assistant</div>
                      <div className="text-sm text-green-400">● Online</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">Translating to {selectedLanguage}</span>
                    <Globe className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' 
                          ? 'bg-green-500' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-500'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-green-500/20 border border-green-500/30 text-green-100'
                            : 'bg-blue-500/20 border border-blue-500/30 text-blue-100'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <div className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 smooth-transition"
                  >
                    <Smile className="w-5 h-5 text-gray-400" />
                  </motion.button>

                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Type a message..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 smooth-transition"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleListening}
                    className={`p-3 rounded-xl smooth-transition ${
                      isListening
                        ? 'bg-red-500 text-white voice-pulse'
                        : 'bg-white/10 text-gray-400 hover:bg-white/20'
                    }`}
                  >
                    <Mic className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={sendMessage}
                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white hover:from-blue-600 hover:to-purple-600 smooth-transition glow-blue"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHub;