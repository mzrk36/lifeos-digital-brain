import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Trophy,
  Star,
  BookOpen,
  Play,
  CheckCircle,
  Clock,
  Target,
  Zap,
  Award,
  TrendingUp,
  Brain
} from 'lucide-react';

const SkillZone: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [userLevel] = useState(7);
  const [userXP] = useState(2450);
  const [streak] = useState(12);

  const courses = [
    {
      id: 1,
      title: 'Advanced React Development',
      category: 'Programming',
      progress: 65,
      duration: '8 hours',
      difficulty: 'Advanced',
      instructor: 'Dr. Sarah Chen',
      rating: 4.9,
      students: 1234,
      color: 'from-blue-500 to-cyan-500',
      icon: '⚛️'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Fundamentals',
      category: 'AI/ML',
      progress: 30,
      duration: '12 hours',
      difficulty: 'Intermediate',
      instructor: 'Prof. Alex Kumar',
      rating: 4.8,
      students: 856,
      color: 'from-purple-500 to-pink-500',
      icon: '🤖'
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      category: 'Marketing',
      progress: 90,
      duration: '6 hours',
      difficulty: 'Beginner',
      instructor: 'Maria Rodriguez',
      rating: 4.7,
      students: 2341,
      color: 'from-green-500 to-teal-500',
      icon: '📈'
    },
    {
      id: 4,
      title: 'Creative Design Principles',
      category: 'Design',
      progress: 15,
      duration: '10 hours',
      difficulty: 'Intermediate',
      instructor: 'James Wilson',
      rating: 4.9,
      students: 567,
      color: 'from-yellow-500 to-orange-500',
      icon: '🎨'
    }
  ];

  const achievements = [
    { id: 1, title: 'First Course Completed', icon: Trophy, earned: true, color: 'text-yellow-400' },
    { id: 2, title: 'Week Streak Master', icon: Star, earned: true, color: 'text-purple-400' },
    { id: 3, title: 'Knowledge Seeker', icon: BookOpen, earned: true, color: 'text-blue-400' },
    { id: 4, title: 'Speed Learner', icon: Zap, earned: false, color: 'text-gray-400' },
    { id: 5, title: 'Top 10% Student', icon: Award, earned: false, color: 'text-gray-400' },
    { id: 6, title: 'Course Creator', icon: Brain, earned: false, color: 'text-gray-400' },
  ];

  const stats = [
    { label: 'Current Level', value: userLevel, icon: Target, color: 'from-blue-500 to-blue-600' },
    { label: 'Total XP', value: userXP.toLocaleString(), icon: Star, color: 'from-purple-500 to-purple-600' },
    { label: 'Day Streak', value: streak, icon: Zap, color: 'from-green-500 to-green-600' },
    { label: 'Courses Completed', value: 3, icon: CheckCircle, color: 'from-yellow-500 to-orange-500' },
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center">
                <GraduationCap className="w-10 h-10 mr-4 text-green-400" />
                SkillZone
              </h1>
              <p className="text-gray-300 text-lg">
                Master new skills with AI-powered personalized learning
              </p>
            </div>

            {/* User Level Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4"
            >
              <div className="text-right">
                <div className="text-2xl font-bold text-white">Level {userLevel}</div>
                <div className="text-sm text-gray-400">{userXP} XP</div>
              </div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center glow-green">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark rounded-2xl p-6 hover-lift smooth-transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Courses */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Your Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-dark rounded-2xl overflow-hidden hover-lift smooth-transition cursor-pointer group"
                    onClick={() => setSelectedCourse(course.id)}
                  >
                    {/* Course Header */}
                    <div className={`h-32 bg-gradient-to-r ${course.color} p-6 flex items-center justify-between`}>
                      <div>
                        <div className="text-4xl mb-2">{course.icon}</div>
                        <div className="text-white font-semibold">{course.category}</div>
                      </div>
                      <div className="text-white/80">
                        {course.progress}%
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 smooth-transition">
                        {course.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          course.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          course.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {course.difficulty}
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${course.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            className={`h-2 bg-gradient-to-r ${course.color} rounded-full`}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm">{course.rating}</span>
                          </div>
                          <span className="text-sm text-gray-400">
                            ({course.students.toLocaleString()})
                          </span>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-green-400 smooth-transition"
                        >
                          <Play className="w-4 h-4" />
                        </motion.button>
                      </div>

                      <div className="mt-4 text-sm text-gray-400">
                        by {course.instructor}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* AI Tutor Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-dark rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-purple-400" />
                  AI Tutor
                </h3>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              <div className="flex items-start space-x-4">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center glow-purple"
                >
                  <Brain className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-500/30 mb-4">
                    <p className="text-purple-100 text-sm">
                      "Based on your learning pattern, I recommend focusing on the React course next. 
                      You're making excellent progress! Would you like me to create a personalized study plan?"
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-400 text-sm smooth-transition"
                    >
                      Create Plan
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 text-sm smooth-transition"
                    >
                      Ask Question
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Achievements & Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Achievements */}
            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
                Achievements
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={achievement.id}
                      whileHover={{ scale: achievement.earned ? 1.05 : 1 }}
                      className={`p-3 rounded-lg border text-center smooth-transition ${
                        achievement.earned
                          ? 'bg-yellow-500/20 border-yellow-500/30 cursor-pointer'
                          : 'bg-gray-500/10 border-gray-500/20'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${achievement.color}`} />
                      <div className={`text-xs ${achievement.earned ? 'text-white' : 'text-gray-500'}`}>
                        {achievement.title}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Learning Streak */}
            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-green-400" />
                Learning Streak
              </h3>
              
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {streak}
                </div>
                <div className="text-gray-400 text-sm">Days in a row</div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-4">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded-sm ${
                      i < streak % 7 ? 'bg-green-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <div className="text-xs text-gray-400 text-center">
                Keep it up! You're on fire! 🔥
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-blue-400 text-sm smooth-transition flex items-center space-x-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Browse Courses</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-400 text-sm smooth-transition flex items-center space-x-2"
                >
                  <Target className="w-4 h-4" />
                  <span>Set Learning Goals</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-3 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-green-400 text-sm smooth-transition flex items-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Resume Learning</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillZone;