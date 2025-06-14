import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Search,
  Plus,
  FileText,
  Folder,
  Star,
  Mic,
  Eye,
  Edit3,
  Trash2,
  Filter,
  Grid,
  List
} from 'lucide-react';

const SmartBrain: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Notes', count: 24, color: 'blue' },
    { id: 'work', name: 'Work', count: 12, color: 'purple' },
    { id: 'personal', name: 'Personal', count: 8, color: 'green' },
    { id: 'ideas', name: 'Ideas', count: 4, color: 'yellow' },
  ];

  const notes = [
    {
      id: 1,
      title: 'Project Strategy Meeting',
      content: 'Key decisions made about the new product launch...',
      category: 'work',
      date: '2024-01-15',
      starred: true,
      tags: ['strategy', 'meeting', 'product'],
    },
    {
      id: 2,
      title: 'Weekend Trip Planning',
      content: 'Ideas for the upcoming weekend getaway to the mountains...',
      category: 'personal',
      date: '2024-01-14',
      starred: false,
      tags: ['travel', 'planning', 'weekend'],
    },
    {
      id: 3,
      title: 'App Feature Ideas',
      content: 'Brainstorming session results for new app features...',
      category: 'ideas',
      date: '2024-01-13',
      starred: true,
      tags: ['brainstorming', 'features', 'app'],
    },
    {
      id: 4,
      title: 'Learning Goals 2024',
      content: 'List of skills and technologies I want to learn this year...',
      category: 'personal',
      date: '2024-01-12',
      starred: false,
      tags: ['goals', 'learning', 'development'],
    },
  ];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                <Brain className="w-10 h-10 mr-4 text-purple-400" />
                Smart Brain
              </h1>
              <p className="text-gray-300 text-lg">
                Your intelligent note-taking and knowledge management system
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white font-medium hover:from-purple-600 hover:to-blue-600 smooth-transition glow-purple flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>New Note</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-dark rounded-2xl p-6 mb-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search your brain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 smooth-transition"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-purple-400 smooth-transition"
              >
                <Mic className="w-5 h-5" />
              </motion.button>
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg smooth-transition ${
                  viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg smooth-transition ${
                  viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg text-gray-400 hover:text-white smooth-transition">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-dark rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Folder className="w-5 h-5 mr-2 text-blue-400" />
              Categories
            </h2>
            
            <div className="space-y-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full p-3 rounded-lg text-left smooth-transition flex items-center justify-between ${
                    selectedCategory === category.id
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    category.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                    category.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                    category.color === 'green' ? 'bg-green-500/20 text-green-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* AI Suggestions */}
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
              <h3 className="text-sm font-medium text-purple-400 mb-2">AI Suggestion</h3>
              <p className="text-xs text-gray-300">
                Consider organizing your "work" notes by project for better structure.
              </p>
            </div>
          </motion.div>

          {/* Notes Grid */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`grid gap-4 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
            >
              {filteredNotes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-dark rounded-2xl p-6 hover-lift smooth-transition group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 smooth-transition">
                      {note.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {note.starred && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      )}
                      <div className="opacity-0 group-hover:opacity-100 smooth-transition flex space-x-1">
                        <button className="p-1 text-gray-400 hover:text-blue-400 smooth-transition">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-green-400 smooth-transition">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-400 smooth-transition">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {note.content}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {note.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{note.date}</span>
                    <div className="flex items-center space-x-1">
                      <FileText className="w-3 h-3" />
                      <span className="capitalize">{note.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredNotes.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-dark rounded-2xl p-12 text-center"
              >
                <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No notes found</h3>
                <p className="text-gray-500">
                  {searchQuery ? 'Try a different search term' : 'Start creating your digital brain'}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartBrain;