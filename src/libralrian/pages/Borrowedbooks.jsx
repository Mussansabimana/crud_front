import React, { useState } from 'react';

const BorrowedBooks = () => {
  // This would normally come from an API with the JOIN query you provided
  const [borrowedBooks] = useState([
    {
      id: 1,
      title: 'The Great Gatsby',
      member_name: 'John Doe',
      borrow_date: '2024-01-15',
      return_date: '2024-02-15',
      status: 'borrowed'
    },
    {
      id: 2,
      title: '1984',
      member_name: 'Jane Smith',
      borrow_date: '2024-01-20',
      return_date: '2024-02-20',
      status: 'overdue'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700">Borrowed Books</h2>
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
                <th className="px-6 py-4 text-left">Book Title</th>
                <th className="px-6 py-4 text-left">Borrowed By</th>
                <th className="px-6 py-4 text-left">Borrow Date</th>
                <th className="px-6 py-4 text-left">Return Date</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.map((book) => (
                <tr key={book.id} className="border-t border-gray-200">
                  <td className="px-6 py-4 font-medium">{book.title}</td>
                  <td className="px-6 py-4">{book.member_name}</td>
                  <td className="px-6 py-4">
                    {new Date(book.borrow_date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(book.return_date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      book.status === 'borrowed' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {book.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button 
                        className="neumorph-sm px-3 py-1 text-sm text-blue-600"
                        title="Return Book"
                      >
                        Return
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="neumorph p-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Total Borrowed</h3>
          <p className="text-2xl font-semibold text-gray-800">24</p>
        </div>
        <div className="neumorph p-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Overdue</h3>
          <p className="text-2xl font-semibold text-red-600">3</p>
        </div>
        <div className="neumorph p-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Due Today</h3>
          <p className="text-2xl font-semibold text-yellow-600">5</p>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooks;
