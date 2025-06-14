import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Globe,
  Calendar,
  Target,
  Activity,
  Sun,
  Cloud,
  CloudRain,
  Zap,
  TrendingUp,
  Clock,
  Bell
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather] = useState({ temp: 22, condition: 'sunny', location: 'San Francisco' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Tasks Completed', value: '24', icon: Target, color: 'from-blue-500 to-blue-600' },
    { label: 'Learning Hours', value: '12.5', icon: Brain, color: 'from-purple-500 to-purple-600' },
    { label: 'Energy Level', value: '85%', icon: Zap, color: 'from-green-500 to-green-600' },
    { label: 'Productivity', value: '92%', icon: TrendingUp, color: 'from-yellow-500 to-orange-500' },
  ];

  const upcomingTasks = [
    { title: 'Team Meeting', time: '10:00 AM', priority: 'high' },
    { title: 'Review Project Proposal', time: '2:00 PM', priority: 'medium' },
    { title: 'Workout Session', time: '6:00 PM', priority: 'low' },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Good Morning, <span className="holographic">Alex</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Ready to conquer another productive day?
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* 3D Globe Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 glass-dark rounded-2xl p-6 hover-lift smooth-transition"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <Globe className="w-6 h-6 mr-2 text-blue-400" />
                Global Activity
              </h2>
              <div className="text-sm text-gray-400">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
            
            <div className="relative h-64 flex items-center justify-center">
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-blue-600 relative overflow-hidden glow-blue"
              >
                {/* Simulated continents */}
                <div className="absolute top-8 left-12 w-16 h-12 bg-green-400 rounded-lg opacity-70"></div>
                <div className="absolute bottom-12 right-8 w-20 h-16 bg-green-400 rounded-lg opacity-70"></div>
                <div className="absolute top-16 right-16 w-12 h-8 bg-green-400 rounded-lg opacity-70"></div>
                
                {/* Activity points */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                    }}
                  />
                ))}
              </motion.div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">147</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">23</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">5.2k</div>
                <div className="text-sm text-gray-400">Tasks Done</div>
              </div>
            </div>
          </motion.div>

          {/* Weather Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-dark rounded-2xl p-6 hover-lift smooth-transition"
          >
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Sun className="w-6 h-6 mr-2 text-yellow-400" />
              Weather
            </h2>
            
            <div className="text-center mb-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block mb-2"
              >
                {weather.condition === 'sunny' && <Sun className="w-16 h-16 text-yellow-400" />}
                {weather.condition === 'cloudy' && <Cloud className="w-16 h-16 text-gray-400" />}
                {weather.condition === 'rainy' && <CloudRain className="w-16 h-16 text-blue-400" />}
              </motion.div>
              
              <div className="text-4xl font-bold text-white mb-1">
                {weather.temp}°C
              </div>
              <div className="text-gray-400 capitalize">{weather.condition}</div>
              <div className="text-sm text-gray-500">{weather.location}</div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Humidity</span>
                <span className="text-white">65%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Wind</span>
                <span className="text-white">12 km/h</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">UV Index</span>
                <span className="text-white">High</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-dark rounded-2xl p-6 hover-lift smooth-transition group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} group-hover:scale-110 smooth-transition`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Activity className="w-4 h-4 text-gray-400" />
                </div>
                
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-dark rounded-2xl p-6 hover-lift smooth-transition"
          >
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Brain className="w-6 h-6 mr-2 text-purple-400" />
              AI Daily Summary
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <p className="text-gray-300 mb-2">
                  "You're having a highly productive day! Your focus time increased by 15% compared to yesterday."
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>AI Insight</span>
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 smooth-transition pulse-glow"
              >
                Type or Speak Command
              </motion.button>
            </div>
          </motion.div>

          {/* Upcoming Tasks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-dark rounded-2xl p-6 hover-lift smooth-transition"
          >
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-green-400" />
              Upcoming Tasks
            </h2>
            
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 smooth-transition group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      task.priority === 'high' ? 'bg-red-400' :
                      task.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                    }`} />
                    <div>
                      <div className="text-white font-medium">{task.title}</div>
                      <div className="text-sm text-gray-400">{task.time}</div>
                    </div>
                  </div>
                  <Bell className="w-4 h-4 text-gray-400 group-hover:text-white smooth-transition" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;