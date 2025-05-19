import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="dark-neumorph rounded-xl p-4 mt-auto"
    >
      <div className="text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} GS BUMBA TSS Library System
        </p>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-2 px-3 py-1 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900"
        >
          <span className="text-xs font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Dark Neumorphism UI
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;