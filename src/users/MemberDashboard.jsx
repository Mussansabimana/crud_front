import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

const MemberDashboard = () => {
  return (
    <div className="h-screen bg-[#e0e5ec] flex flex-col">
      <Nav />
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MemberDashboard;
