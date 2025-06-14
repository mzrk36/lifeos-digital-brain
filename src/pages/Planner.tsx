import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Plus,
  Clock,
  Flag,
  CheckCircle,
  Circle,
  User,
  MapPin,
  Bell,
  Filter,
  Grid,
  List,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description?: string;
  time: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  category: string;
  location?: string;
}

const Planner: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('day');
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Team Standup Meeting',
      description: 'Daily sync with the development team',
      time: '09:00',
      priority: 'high',
      completed: false,
      category: 'work',
      location: 'Conference Room A'
    },
    {
      id: 2,
      title: 'Review Project Proposals',
      time: '11:30',
      priority: 'medium',
      completed: false,
      category: 'work'
    },
    {
      id: 3,
      title: 'Lunch with Sarah',
      time: '12:30',
      priority: 'low',
      completed: false,
      category: 'personal',
      location: 'Downtown Cafe'
    },
    {
      id: 4,
      title: 'Gym Workout',
      time: '18:00',
      priority: 'medium',
      completed: true,
      category: 'health'
    }
  ]);

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'from-red-500 to-red-600';
      case 'medium': return 'from-yellow-500 to-orange-500';
      case 'low': return 'from-green-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'work': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'personal': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'health': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const energyLevel = 85; // Mock energy level

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center">
                <Calendar className="w-10 h-10 mr-4 text-blue-400" />
                Smart Planner
              </h1>
              <p className="text-gray-300 text-lg">
                AI-powered scheduling with 3D calendar and energy tracking
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {/* View Mode Selector */}
              <div className="flex bg-white/10 rounded-lg p-1">
                {['day', 'week', 'month'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode as any)}
                    className={`px-4 py-2 rounded-md text-sm capitalize smooth-transition ${
                      viewMode === mode
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium hover:from-blue-600 hover:to-purple-600 smooth-transition glow-blue flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>New Task</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Calendar & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Mini Calendar */}
            <div className="glass-dark rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">
                  {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h3>
                <div className="flex space-x-1">
                  <button className="p-1 text-gray-400 hover:text-white smooth-transition">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-white smooth-transition">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                  <div key={day} className="text-gray-400 p-2 font-medium">
                    {day}
                  </div>
                ))}
                {[...Array(35)].map((_, i) => {
                  const date = i - 6; // Adjust for calendar layout
                  const isToday = date === new Date().getDate();
                  const hasEvents = Math.random() > 0.7; // Mock event indicator
                  
                  return (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-lg text-sm smooth-transition relative ${
                        isToday
                          ? 'bg-blue-500 text-white'
                          : date > 0 && date <= 31
                          ? 'text-gray-300 hover:bg-white/10'
                          : 'text-gray-600'
                      }`}
                    >
                      {date > 0 && date <= 31 ? date : ''}
                      {hasEvents && date > 0 && date <= 31 && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Energy Tracker */}
            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-green-400" />
                Energy Level
              </h3>
              
              <div className="relative mb-4">
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${energyLevel}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full relative"
                  >
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-white font-bold">
                      {energyLevel}%
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl">😊</div>
                  <div className="text-xs text-gray-400">Mood</div>
                </div>
                <div>
                  <div className="text-2xl">🔋</div>
                  <div className="text-xs text-gray-400">Energy</div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="text-sm text-green-400 font-medium mb-1">
                  AI Recommendation
                </div>
                <div className="text-xs text-gray-300">
                  Your energy is high! Perfect time for important tasks.
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Today's Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Tasks Completed</span>
                  <span className="text-white font-semibold">
                    {tasks.filter(t => t.completed).length}/{tasks.length}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Focus Time</span>
                  <span className="text-white font-semibold">4.5h</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Productivity</span>
                  <span className="text-green-400 font-semibold">92%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content - Task List */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-dark rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Today's Schedule
                </h2>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white smooth-transition">
                    <Filter className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white smooth-transition">
                    <Grid className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white smooth-transition">
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                {tasks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`relative p-4 rounded-xl border smooth-transition hover-lift group ${
                      task.completed
                        ? 'bg-green-500/10 border-green-500/30'
                        : 'bg-white/5 border-white/10 hover:border-blue-500/30'
                    }`}
                  >
                    {/* Timeline connector */}
                    {index < tasks.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                    )}

                    <div className="flex items-start space-x-4">
                      {/* Time and Priority */}
                      <div className="flex flex-col items-center space-y-2">
                        <div className="text-sm font-medium text-gray-300">
                          {task.time}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleTask(task.id)}
                          className="relative"
                        >
                          {task.completed ? (
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          ) : (
                            <Circle className="w-6 h-6 text-gray-400 hover:text-blue-400 smooth-transition" />
                          )}
                        </motion.button>
                      </div>

                      {/* Task Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className={`text-lg font-semibold smooth-transition ${
                            task.completed
                              ? 'text-gray-400 line-through'
                              : 'text-white group-hover:text-blue-400'
                          }`}>
                            {task.title}
                          </h3>
                          
                          <div className="flex items-center space-x-2">
                            {/* Priority Badge */}
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getPriorityColor(task.priority)}`} />
                            
                            {/* Category Badge */}
                            <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryColor(task.category)}`}>
                              {task.category}
                            </span>
                          </div>
                        </div>

                        {task.description && (
                          <p className="text-gray-400 text-sm mb-3">
                            {task.description}
                          </p>
                        )}

                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          {task.location && (
                            <span className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{task.location}</span>
                            </span>
                          )}
                          
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>1 hour</span>
                          </span>

                          <span className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>Personal</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* AI Suggestions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-purple-400">AI Scheduling Assistant</span>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  I've optimized your schedule based on your energy patterns. Consider moving the gym workout to earlier when your energy is higher.
                </p>
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-400 text-xs smooth-transition"
                  >
                    Apply Changes
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 text-xs smooth-transition"
                  >
                    Dismiss
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;