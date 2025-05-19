import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Librarian imports
import AdminDashboard from './libralrian/AdminDashboard';
import LibrarianLogin from './libralrian/auth/Login';
import LibrarianRegister from './libralrian/auth/Register';
import Overview from './libralrian/pages/Overview';
import AddBook from './libralrian/pages/Addbook';
import AddMember from './libralrian/pages/Addmember';
import AllBooks from './libralrian/pages/Allbooks';
import AllMembers from './libralrian/pages/AllMembers';
import BorrowedBooks from './libralrian/pages/BorrowedBooks';
import EditBook from './libralrian/pages/EditBook';
import EditMember from './libralrian/pages/EditMember';

// User imports
import Login from './users/auth/Login';
import MemberDashboard from './users/MemberDashboard';
import UserAllBooks from './users/pages/AllBooks';
import UserBorrowedBooks from './users/pages/BorrowedBooks';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Navigate to="/librarian/login" />} />
        
        {/* User auth routes */}
        <Route path="/login" element={<Login />} />

        {/* Librarian auth routes */}
        <Route path="/librarian/login" element={<LibrarianLogin />} />
        <Route path="/librarian/register" element={<LibrarianRegister />} />

        {/* Librarian routes */}
        <Route path="/librarian" element={<AdminDashboard />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="addbook" element={<AddBook />} />
          <Route path="addmember" element={<AddMember />} />
          <Route path="allbooks" element={<AllBooks />} />
          <Route path="allmembers" element={<AllMembers />} />
          <Route path="borrowedbooks" element={<BorrowedBooks />} />
          <Route path="editbook/:id" element={<EditBook />} />
          <Route path="editmember/:id" element={<EditMember />} />
        </Route>

        {/* User routes */}
        <Route path="/user" element={<MemberDashboard />}>
          <Route index element={<Navigate to="allbooks" />} />
          <Route path="allbooks" element={<UserAllBooks />} />
          <Route path="borrowedbooks" element={<UserBorrowedBooks />} />
        </Route>

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;