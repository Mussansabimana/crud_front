import React, { useState } from 'react';

const BorrowedBooks = () => {
  const [borrowedBooks] = useState([
    {
      borrowed_books_id: 1,
      book_id: 101,
      member_id: 201,
      borrowed_date: '2024-01-15',
      due_date: '2024-02-15',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald'
    },
    {
      borrowed_books_id: 2,
      book_id: 102,
      member_id: 201,
      borrowed_date: '2024-01-20',
      due_date: '2024-02-20',
      title: '1984',
      author: 'George Orwell'
    }
  ]);

  const handleReturn = (borrowedId) => {
    // Add return logic here
    console.log('Returning book:', borrowedId);
  };

  const handleExtend = (borrowedId) => {
    // Add extend logic here
    console.log('Extending book:', borrowedId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700">My Borrowed Books</h2>
        <div className="neumorph-inset px-4 py-2 w-64">
          <input
            type="text"
            placeholder="Search borrowed books..."
            className="bg-transparent w-full outline-none text-gray-700"
          />
        </div>
      </div>

      <div className="neumorph overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Author</th>
                <th className="px-6 py-4 text-left">Borrowed Date</th>
                <th className="px-6 py-4 text-left">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.map((book) => (
                <tr key={book.borrowed_books_id} className="border-t border-gray-200">
                  <td className="px-6 py-4 font-medium">{book.title}</td>
                  <td className="px-6 py-4">{book.author}</td>
                  <td className="px-6 py-4">
                    {new Date(book.borrowed_date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(book.due_date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="neumorph p-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Total Borrowed</h3>
          <p className="text-2xl font-semibold text-gray-800">{borrowedBooks.length}</p>
        </div>
        <div className="neumorph p-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Books Due Soon</h3>
          <p className="text-2xl font-semibold text-yellow-600">
            {borrowedBooks.filter(book => {
              const dueDate = new Date(book.due_date);
              const today = new Date();
              const diffDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
              return diffDays <= 7 && diffDays > 0;
            }).length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooks;
