import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any cleanup logic here (e.g., clearing tokens, state, etc.)
    console.log('Logging out...');
    // Navigate to login page
    navigate('/librarian/login');
  };

  return (
    <nav className="neumorph m-6">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="neumorph-inset">
              <input
                type="text"
                placeholder="Search..."
                className="input bg-transparent w-64"
              />
            </div>
          </div>
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