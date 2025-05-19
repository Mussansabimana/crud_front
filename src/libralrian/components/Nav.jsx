import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      className="p-4 flex justify-between items-center dark-neumorph rounded-xl"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="flex items-center"
      >
        <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Library Dashboard
        </h2>
      </motion.div>
      
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="dark-neumorph-circle w-10 h-10 rounded-full flex items-center justify-center"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold">
            U
          </span>
        </motion.button>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 mt-2 w-48 dark-neumorph rounded-xl p-2 z-10"
          >
            <button className="w-full text-left p-2 hover:dark-neumorph-pressed rounded-lg text-gray-300 hover:text-white">
              Profile
            </button>
            <button className="w-full text-left p-2 hover:dark-neumorph-pressed rounded-lg text-red-300 hover:text-red-400">
              Log Out
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Nav;