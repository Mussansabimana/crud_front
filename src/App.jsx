import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './libralrian/AdminDashboard';
// import Overview from './librarian/pages/Overview';
// import AllUsers from './librarian/pages/AllUsers';
// import AllBooks from './librarian/pages/AllBooks';
// import BorrowedBooks from './librarian/pages/BorrowedBooks';
// import AddBook from './librarian/pages/AddBook';
// import AddMember from './librarian/pages/AddMember';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/librarian" element={<AdminDashboard />}>
          {/* <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="allusers" element={<AllUsers />} />
          <Route path="allbooks" element={<AllBooks />} />
          <Route path="borrowedbooks" element={<BorrowedBooks />} />
          <Route path="addbook" element={<AddBook />} />
          <Route path="addmember" element={<AddMember />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;