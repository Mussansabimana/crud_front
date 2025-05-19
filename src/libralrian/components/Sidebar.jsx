import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const menuItems = [
    { name: 'Overview', icon: '📊' },
    { name: 'All Users', icon: '👥' },
    { name: 'All Books', icon: '📚' },
    { name: 'Borrowed Books', icon: '🔄' },
    { name: 'Add Book', icon: '➕📖' },
    { name: 'Add Member', icon: '➕👤' }
  ];

  return (
    <motion.div 
      initial={{ x: -20 }}
      animate={{ x: 0 }}
      className="w-64 p-4 h-full"
    >
      <div className="dark-neumorph-inset p-4 rounded-xl mb-8">
        <h1 className="text-xl font-bold text-white">Library Admin</h1>
      </div>
      <nav className="space-y-3">
        {menuItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <NavLink
              to={`/librarian/${item.name.toLowerCase().replace(' ', '')}`}
              className={({ isActive }) => 
                `flex items-center p-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'dark-neumorph-pressed text-purple-300' 
                    : 'dark-neumorph hover:text-white text-gray-300'
                }`
              }
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </NavLink>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;