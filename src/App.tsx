import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import SmartBrain from './pages/SmartBrain';
import ChatHub from './pages/ChatHub';
import CreateSpace from './pages/CreateSpace';
import SkillZone from './pages/SkillZone';
import Planner from './pages/Planner';
import PrivacyVault from './pages/PrivacyVault';
import FamilyHub from './pages/FamilyHub';
import LoadingScreen from './components/LoadingScreen';
import VoiceAssistant from './components/VoiceAssistant';
import './styles/animations.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen transition-all duration-500`}>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 min-h-screen relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="particles-container">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${20 + Math.random() * 20}s`
                }}
              />
            ))}
          </div>
        </div>

        <Router>
          <div className="relative z-10">
            <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            
            <AnimatePresence mode="wait">
              <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="pt-20"
              >
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/brain" element={<SmartBrain />} />
                  <Route path="/chat" element={<ChatHub />} />
                  <Route path="/create" element={<CreateSpace />} />
                  <Route path="/learn" element={<SkillZone />} />
                  <Route path="/planner" element={<Planner />} />
                  <Route path="/vault" element={<PrivacyVault />} />
                  <Route path="/family" element={<FamilyHub />} />
                </Routes>
              </motion.main>
            </AnimatePresence>

            <VoiceAssistant />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;