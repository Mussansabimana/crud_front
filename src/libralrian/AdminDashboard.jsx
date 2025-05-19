import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Footer from './components/Footer';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col p-4">
          <Nav />
          <main className="flex-1 dark-neumorph-inset rounded-xl p-6 mb-4 overflow-auto">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;