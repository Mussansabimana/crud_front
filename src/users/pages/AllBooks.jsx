import React, { useState } from 'react';

const AllBooks = () => {
  const [books] = useState([
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publisher: 'Scribner',
      published_date: '2020-01-15',
      status: 'available'
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      publisher: 'Penguin Books',
      published_date: '2019-06-22',
      status: 'borrowed'
    }
  ]);

  const handleBorrow = (bookId) => {
    // Add borrow logic here
    console.log('Borrowing book:', bookId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700">Available Books</h2>
        <div className="neumorph-inset px-4 py-2 w-64">
          <input
            type="text"
            placeholder="Search books..."
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
                <th className="px-6 py-4 text-left">Publisher</th>
                <th className="px-6 py-4 text-left">Published Date</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id} className="border-t border-gray-200">
                  <td className="px-6 py-4 font-medium">{book.title}</td>
                  <td className="px-6 py-4">{book.author}</td>
                  <td className="px-6 py-4">{book.publisher}</td>
                  <td className="px-6 py-4">
                    {new Date(book.published_date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      book.status === 'available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {book.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {book.status === 'available' && (
                      <button
                        onClick={() => handleBorrow(book.id)}
                        className="neumorph-sm px-4 py-2 text-accent-blue hover:text-blue-700 transition-colors"
                      >
                        Borrow
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
