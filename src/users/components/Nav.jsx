import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  return (
    <nav className="neumorph m-6">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-6">
          <NavLink
            to="/user/allbooks"
            className={({ isActive }) => 
              `text-gray-600 hover:text-accent-blue transition-colors ${isActive ? 'text-accent-blue' : ''}`
            }
          >
            All Books
          </NavLink>
          <NavLink
            to="/user/borrowedbooks"
            className={({ isActive }) => 
              `text-gray-600 hover:text-accent-blue transition-colors ${isActive ? 'text-accent-blue' : ''}`
            }
          >
            My Borrowed Books
          </NavLink>
        </div>
        
        <button
          onClick={handleLogout}
          className="neumorph-sm px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Nav;
