import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Footer from './components/Footer';

const AdminDashboard = () => {
  return (
    <div className="h-screen bg-[#e0e5ec] flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen">
        <Nav />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;