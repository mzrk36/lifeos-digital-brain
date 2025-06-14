import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, VolumeX, Settings, X } from 'lucide-react';

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setIsExpanded(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Floating Voice Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleListening}
          className={`w-16 h-16 rounded-full flex items-center justify-center smooth-transition ${
            isListening
              ? 'bg-gradient-to-r from-red-500 to-pink-500 voice-pulse'
              : 'bg-gradient-to-r from-blue-500 to-purple-500 glow-blue'
          }`}
        >
          {isListening ? (
            <MicOff className="w-8 h-8 text-white" />
          ) : (
            <Mic className="w-8 h-8 text-white" />
          )}
        </motion.button>

        {/* Listening Indicator */}
        {isListening && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -left-2 w-20 h-20 rounded-full border-4 border-red-500/30 animate-ping"
          />
        )}
      </motion.div>

      {/* Expanded Voice Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-40"
          >
            <div className="glass-dark rounded-2xl p-6 w-80 border border-white/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Voice Assistant</h3>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMute}
                    className={`p-2 rounded-lg smooth-transition ${
                      isMuted
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-white/10 text-gray-400 hover:text-white smooth-transition"
                  >
                    <Settings className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsExpanded(false)}
                    className="p-2 rounded-lg bg-white/10 text-gray-400 hover:text-white smooth-transition"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Status */}
              <div className="text-center mb-6">
                <motion.div
                  animate={isListening ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 1, repeat: isListening ? Infinity : 0 }}
                  className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    isListening
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 glow-purple'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 glow-blue'
                  }`}
                >
                  <Mic className="w-10 h-10 text-white" />
                </motion.div>

                <div className="text-white font-medium mb-2">
                  {isListening ? 'Listening...' : 'Ready to help'}
                </div>
                
                <div className="text-sm text-gray-400">
                  {isListening 
                    ? 'Speak now, I\'m listening to your command'
                    : 'Click the microphone to start voice interaction'
                  }
                </div>
              </div>

              {/* Voice Waveform */}
              {isListening && (
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [4, 20, 4] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                      className="w-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
                    />
                  ))}
                </div>
              )}

              {/* Quick Commands */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-400 mb-3">Quick Commands:</div>
                {[
                  'Create a new task',
                  'Show my calendar',
                  'Start focus mode',
                  'Play ambient music'
                ].map((command, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-2 text-left text-sm text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg smooth-transition"
                  >
                    "{command}"
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceAssistant;