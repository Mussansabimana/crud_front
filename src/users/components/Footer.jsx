import React from 'react';

const Footer = () => {
  return (
    <footer className="neumorph mx-6 mb-6">
      <div className="flex justify-between items-center p-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} GS BUMBA TSS Library System
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-gray-600 hover:text-accent-blue transition-colors">Help Center</a>
          <a href="#" className="text-sm text-gray-600 hover:text-accent-blue transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
