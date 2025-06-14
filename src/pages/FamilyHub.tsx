import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Heart,
  Camera,
  Video,
  MessageCircle,
  Calendar,
  MapPin,
  Gift,
  Star,
  Phone,
  Mail,
  Share2,
  Plus,
  Settings
} from 'lucide-react';

const FamilyHub: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const familyMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Mom',
      avatar: '👩‍💼',
      status: 'online',
      location: 'San Francisco, CA',
      lastSeen: 'Active now',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      name: 'Mike Johnson',
      role: 'Dad',
      avatar: '👨‍💻',
      status: 'away',
      location: 'San Francisco, CA',
      lastSeen: '2 hours ago',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Emma Johnson',
      role: 'Daughter',
      avatar: '👧',
      status: 'online',
      location: 'Berkeley, CA',
      lastSeen: 'Active now',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      name: 'Alex Johnson',
      role: 'Son',
      avatar: '👦',
      status: 'offline',
      location: 'San Francisco, CA',
      lastSeen: '1 day ago',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const recentPhotos = [
    { id: 1, url: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg', title: 'Family Dinner', date: '2024-01-15' },
    { id: 2, url: 'https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg', title: 'Weekend Trip', date: '2024-01-14' },
    { id: 3, url: 'https://images.pexels.com/photos/1128316/pexels-photo-1128316.jpeg', title: 'Birthday Party', date: '2024-01-13' },
    { id: 4, url: 'https://images.pexels.com/photos/1128315/pexels-photo-1128315.jpeg', title: 'Beach Day', date: '2024-01-12' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Emma\'s Graduation', date: '2024-06-15', type: 'celebration', icon: '🎓' },
    { id: 2, title: 'Family Vacation', date: '2024-07-20', type: 'travel', icon: '✈️' },
    { id: 3, title: 'Mike\'s Birthday', date: '2024-03-10', type: 'birthday', icon: '🎂' },
    { id: 4, title: 'Anniversary Dinner', date: '2024-05-22', type: 'celebration', icon: '💕' },
  ];

  const sharedMemories = [
    { id: 1, type: 'photo', title: 'Christmas Morning 2023', likes: 12, comments: 5 },
    { id: 2, type: 'video', title: 'Emma\'s First Steps', likes: 24, comments: 8 },
    { id: 3, type: 'photo', title: 'Summer Vacation Album', likes: 18, comments: 12 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-400';
      case 'away': return 'bg-yellow-400';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

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
                <Users className="w-10 h-10 mr-4 text-pink-400" />
                Family Hub
              </h1>
              <p className="text-gray-300 text-lg">
                Stay connected with your loved ones in your virtual family room
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 smooth-transition flex items-center space-x-2"
              >
                <Video className="w-4 h-4" />
                <span>Family Call</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl text-white font-medium hover:from-pink-600 hover:to-purple-600 smooth-transition glow-purple flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Add Member</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-dark rounded-2xl p-2 mb-6"
        >
          <div className="flex space-x-2">
            {[
              { id: 'overview', label: 'Overview', icon: Users },
              { id: 'photos', label: 'Photos', icon: Camera },
              { id: 'events', label: 'Events', icon: Calendar },
              { id: 'messages', label: 'Messages', icon: MessageCircle },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-3 rounded-xl smooth-transition flex items-center justify-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Family Members */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-dark rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-pink-400" />
              Family Members
            </h2>

            <div className="space-y-4">
              {familyMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-white/5 hover:bg-white/10 rounded-xl smooth-transition cursor-pointer group"
                  onClick={() => setSelectedMember(member.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-2xl`}>
                        {member.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-gray-800`} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-white font-semibold group-hover:text-pink-400 smooth-transition">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-400">{member.role}</p>
                      <p className="text-xs text-gray-500">{member.lastSeen}</p>
                    </div>

                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 smooth-transition">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-green-400 smooth-transition"
                      >
                        <Phone className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-blue-400 smooth-transition"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center text-xs text-gray-400">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{member.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Family Stats */}
            <div className="mt-6 p-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg border border-pink-500/20">
              <h3 className="text-sm font-medium text-pink-400 mb-3">Family Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">248</div>
                  <div className="text-xs text-gray-400">Shared Photos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">12</div>
                  <div className="text-xs text-gray-400">Upcoming Events</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                {/* Recent Photos */}
                <div className="glass-dark rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <Camera className="w-5 h-5 mr-2 text-blue-400" />
                      Recent Memories
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="text-blue-400 hover:text-blue-300 text-sm smooth-transition"
                    >
                      View All
                    </motion.button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {recentPhotos.map((photo, index) => (
                      <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative group cursor-pointer"
                      >
                        <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500">
                          <div className="w-full h-full bg-white/10 flex items-center justify-center">
                            <Camera className="w-8 h-8 text-white/60" />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 smooth-transition rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-white font-medium text-sm mb-1">{photo.title}</div>
                            <div className="text-gray-300 text-xs">{photo.date}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-green-400" />
                    Upcoming Events
                  </h3>

                  <div className="space-y-3">
                    {upcomingEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center space-x-4 p-3 bg-white/5 hover:bg-white/10 rounded-lg smooth-transition group"
                      >
                        <div className="text-2xl">{event.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover:text-green-400 smooth-transition">
                            {event.title}
                          </h4>
                          <p className="text-sm text-gray-400">{event.date}</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-green-400 smooth-transition opacity-0 group-hover:opacity-100"
                        >
                          <Bell className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Shared Memories */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-400" />
                    Shared Memories
                  </h3>

                  <div className="space-y-4">
                    {sharedMemories.map((memory, index) => (
                      <motion.div
                        key={memory.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg smooth-transition group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-yellow-500/20 rounded-lg">
                            {memory.type === 'photo' ? (
                              <Camera className="w-5 h-5 text-yellow-400" />
                            ) : (
                              <Video className="w-5 h-5 text-yellow-400" />
                            )}
                          </div>
                          <div>
                            <h4 className="text-white font-medium group-hover:text-yellow-400 smooth-transition">
                              {memory.title}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <span className="flex items-center space-x-1">
                                <Heart className="w-3 h-3" />
                                <span>{memory.likes}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <MessageCircle className="w-3 h-3" />
                                <span>{memory.comments}</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-blue-400 smooth-transition opacity-0 group-hover:opacity-100"
                        >
                          <Share2 className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other tab content would go here */}
            {activeTab !== 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-dark rounded-2xl p-12 text-center"
              >
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                <p className="text-gray-400">
                  This section is under development. Stay tuned for amazing family features!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyHub;