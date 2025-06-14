import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Palette,
  Image,
  Type,
  Square,
  Circle,
  Triangle,
  Download,
  Save,
  Undo,
  Redo,
  Layers,
  Settings,
  Sparkles
} from 'lucide-react';

const CreateSpace: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState('select');
  const [canvasElements, setCanvasElements] = useState<any[]>([]);

  const tools = [
    { id: 'select', icon: Palette, label: 'Select', color: 'blue' },
    { id: 'text', icon: Type, label: 'Text', color: 'green' },
    { id: 'rectangle', icon: Square, label: 'Rectangle', color: 'purple' },
    { id: 'circle', icon: Circle, label: 'Circle', color: 'yellow' },
    { id: 'triangle', icon: Triangle, label: 'Triangle', color: 'red' },
    { id: 'image', icon: Image, label: 'Image', color: 'orange' },
  ];

  const colorPalette = [
    '#3B82F6', '#8B5CF6', '#10B981', '#F59E0B',
    '#EF4444', '#EC4899', '#6366F1', '#14B8A6',
    '#F97316', '#84CC16', '#06B6D4', '#8B5A2B'
  ];

  const templates = [
    { id: 1, name: 'Social Media Post', preview: 'bg-gradient-to-br from-pink-400 to-purple-600' },
    { id: 2, name: 'Presentation Slide', preview: 'bg-gradient-to-br from-blue-400 to-cyan-600' },
    { id: 3, name: 'Logo Design', preview: 'bg-gradient-to-br from-green-400 to-teal-600' },
    { id: 4, name: 'Infographic', preview: 'bg-gradient-to-br from-yellow-400 to-orange-600' },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center">
                <Palette className="w-10 h-10 mr-4 text-purple-400" />
                CreateSpace
              </h1>
              <p className="text-gray-300 text-lg">
                Professional design studio with AI-powered creativity tools
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 smooth-transition flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium hover:from-purple-600 hover:to-pink-600 smooth-transition glow-purple flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Sidebar - Tools */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-dark rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-400" />
              Tools
            </h2>

            {/* Tool Selection */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <motion.button
                    key={tool.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTool(tool.id)}
                    className={`p-3 rounded-lg flex flex-col items-center space-y-1 smooth-transition ${
                      selectedTool === tool.id
                        ? `bg-${tool.color}-500/20 text-${tool.color}-400 border border-${tool.color}-500/30`
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs">{tool.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Actions */}
            <div className="space-y-2 mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 smooth-transition flex items-center justify-center space-x-2"
              >
                <Undo className="w-4 h-4" />
                <span>Undo</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 smooth-transition flex items-center justify-center space-x-2"
              >
                <Redo className="w-4 h-4" />
                <span>Redo</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 smooth-transition flex items-center justify-center space-x-2"
              >
                <Layers className="w-4 h-4" />
                <span>Layers</span>
              </motion.button>
            </div>

            {/* Color Palette */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">Colors</h3>
              <div className="grid grid-cols-4 gap-2">
                {colorPalette.map((color, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-lg shadow-lg hover:shadow-xl smooth-transition"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* AI Assistant */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20"
            >
              <div className="flex items-center space-x-2 mb-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">AI Assistant</span>
              </div>
              <p className="text-xs text-gray-300 mb-3">
                Let AI help you create amazing designs!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-400 text-xs smooth-transition"
              >
                Generate Ideas
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Canvas Area */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-dark rounded-2xl p-6 h-[600px]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Canvas</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>1920 × 1080</span>
                  <span>•</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Canvas */}
              <div className="relative w-full h-full bg-white/5 rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center group hover:border-purple-500/50 smooth-transition">
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Palette className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-gray-400 mb-2">Start Creating</h4>
                  <p className="text-gray-500 mb-4">
                    Select a tool from the sidebar or choose a template to begin
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-600 smooth-transition"
                  >
                    Choose Template
                  </motion.button>
                </div>

                {/* Grid overlay for alignment */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar - Templates & Assets */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-dark rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Templates</h2>
            
            <div className="space-y-4 mb-6">
              {templates.map((template) => (
                <motion.div
                  key={template.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer group"
                >
                  <div className={`w-full h-24 ${template.preview} rounded-lg mb-2 flex items-center justify-center group-hover:shadow-lg smooth-transition`}>
                    <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 smooth-transition">
                      Use Template
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-gray-300 group-hover:text-white smooth-transition">
                    {template.name}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* Asset Library */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Assets</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Icons', 'Photos', 'Shapes', 'Stickers'].map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 text-sm smooth-transition"
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Recent Projects */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Recent</h3>
              <div className="space-y-2">
                {['Project 1', 'Project 2', 'Project 3'].map((project, index) => (
                  <motion.div
                    key={project}
                    whileHover={{ scale: 1.02 }}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer smooth-transition"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                      <span className="text-sm text-gray-300">{project}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CreateSpace;