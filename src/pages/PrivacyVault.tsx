import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Upload,
  Download,
  FileText,
  Image,
  Video,
  Music,
  Folder,
  Search,
  Key,
  Fingerprint,
  Smartphone
} from 'lucide-react';

const PrivacyVault: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [authMethod, setAuthMethod] = useState<'biometric' | 'password' | 'pin'>('biometric');
  const [selectedFolder, setSelectedFolder] = useState('documents');

  const authMethods = [
    { id: 'biometric', icon: Fingerprint, label: 'Biometric', color: 'from-green-500 to-green-600' },
    { id: 'password', icon: Key, label: 'Password', color: 'from-blue-500 to-blue-600' },
    { id: 'pin', icon: Smartphone, label: 'PIN Code', color: 'from-purple-500 to-purple-600' },
  ];

  const folders = [
    { id: 'documents', name: 'Documents', icon: FileText, count: 24, color: 'text-blue-400' },
    { id: 'images', name: 'Images', icon: Image, count: 156, color: 'text-green-400' },
    { id: 'videos', name: 'Videos', icon: Video, count: 12, color: 'text-red-400' },
    { id: 'audio', name: 'Audio', icon: Music, count: 48, color: 'text-yellow-400' },
    { id: 'personal', name: 'Personal', icon: Folder, count: 8, color: 'text-purple-400' },
  ];

  const recentFiles = [
    { id: 1, name: 'passport_scan.pdf', type: 'document', size: '2.4 MB', date: '2024-01-15', encrypted: true },
    { id: 2, name: 'bank_statement.pdf', type: 'document', size: '856 KB', date: '2024-01-14', encrypted: true },
    { id: 3, name: 'family_photo.jpg', type: 'image', size: '4.2 MB', date: '2024-01-13', encrypted: true },
    { id: 4, name: 'medical_records.pdf', type: 'document', size: '1.8 MB', date: '2024-01-12', encrypted: true },
  ];

  const handleUnlock = () => {
    // Simulate authentication
    setTimeout(() => {
      setIsUnlocked(true);
    }, 2000);
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'document': return FileText;
      case 'image': return Image;
      case 'video': return Video;
      case 'audio': return Music;
      default: return FileText;
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <div className="glass-dark rounded-2xl p-8 text-center">
            {/* Vault Door Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative mx-auto w-32 h-32">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-4 border-blue-500/30"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-blue-500 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-4 h-4 bg-blue-500 rounded-full" />
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-4 h-4 bg-blue-500 rounded-full" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-4 h-4 bg-blue-500 rounded-full" />
                </motion.div>
                
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center glow-blue">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>

            <h1 className="text-3xl font-bold text-white mb-2">Privacy Vault</h1>
            <p className="text-gray-300 mb-8">
              Your secure digital safe with military-grade encryption
            </p>

            {/* Authentication Methods */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-white">Choose Authentication Method</h3>
              <div className="grid grid-cols-1 gap-3">
                {authMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <motion.button
                      key={method.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setAuthMethod(method.id as any)}
                      className={`p-4 rounded-lg border-2 smooth-transition flex items-center space-x-3 ${
                        authMethod === method.id
                          ? 'border-blue-500 bg-blue-500/20'
                          : 'border-white/20 bg-white/10 hover:border-blue-500/50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium">{method.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Unlock Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUnlock}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:from-blue-600 hover:to-purple-600 smooth-transition glow-blue flex items-center justify-center space-x-2"
            >
              <Unlock className="w-5 h-5" />
              <span>Unlock Vault</span>
            </motion.button>

            <div className="mt-6 text-sm text-gray-400">
              🔒 Protected by AES-256 encryption
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

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
                <Shield className="w-10 h-10 mr-4 text-green-400" />
                Privacy Vault
                <span className="ml-3 px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                  Unlocked
                </span>
              </h1>
              <p className="text-gray-300 text-lg">
                Your files are secure with end-to-end encryption
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 smooth-transition flex items-center space-x-2"
              >
                <Upload className="w-4 h-4" />
                <span>Upload</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsUnlocked(false)}
                className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-red-400 smooth-transition flex items-center space-x-2"
              >
                <Lock className="w-4 h-4" />
                <span>Lock Vault</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-dark rounded-2xl p-6 mb-6"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search encrypted files..."
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 smooth-transition"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Folders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-dark rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Folder className="w-5 h-5 mr-2 text-blue-400" />
              Folders
            </h2>

            <div className="space-y-2">
              {folders.map((folder) => {
                const Icon = folder.icon;
                return (
                  <motion.button
                    key={folder.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedFolder(folder.id)}
                    className={`w-full p-3 rounded-lg text-left smooth-transition flex items-center justify-between ${
                      selectedFolder === folder.id
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-5 h-5 ${folder.color}`} />
                      <span>{folder.name}</span>
                    </div>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                      {folder.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Storage Info */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
              <h3 className="text-sm font-medium text-blue-400 mb-2">Storage Usage</h3>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '68%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>6.8 GB used</span>
                <span>10 GB total</span>
              </div>
            </div>
          </motion.div>

          {/* Main Content - File Grid */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-dark rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white capitalize">
                  {selectedFolder} Files
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">
                    {recentFiles.length} files
                  </span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>

              {/* File Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {recentFiles.map((file, index) => {
                  const Icon = getFileIcon(file.type);
                  return (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-green-500/30 smooth-transition group cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg">
                          <Icon className="w-6 h-6 text-green-400" />
                        </div>
                        {file.encrypted && (
                          <div className="p-1 bg-green-500/20 rounded-full">
                            <Shield className="w-3 h-3 text-green-400" />
                          </div>
                        )}
                      </div>

                      <h3 className="text-white font-medium mb-1 group-hover:text-green-400 smooth-transition truncate">
                        {file.name}
                      </h3>
                      
                      <div className="text-sm text-gray-400 space-y-1">
                        <div>{file.size}</div>
                        <div>{file.date}</div>
                      </div>

                      <div className="mt-3 flex space-x-2 opacity-0 group-hover:opacity-100 smooth-transition">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1 bg-blue-500/20 hover:bg-blue-500/30 rounded text-blue-400 smooth-transition"
                        >
                          <Eye className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1 bg-green-500/20 hover:bg-green-500/30 rounded text-green-400 smooth-transition"
                        >
                          <Download className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Upload Zone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-green-500/50 smooth-transition group"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-4"
                >
                  <Upload className="w-12 h-12 text-gray-400 group-hover:text-green-400 mx-auto smooth-transition" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-400 group-hover:text-white mb-2 smooth-transition">
                  Drop files to encrypt and store
                </h3>
                <p className="text-gray-500 mb-4">
                  Files will be automatically encrypted with AES-256
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white font-medium hover:from-green-600 hover:to-blue-600 smooth-transition"
                >
                  Choose Files
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyVault;