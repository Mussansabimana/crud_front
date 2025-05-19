import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditBook = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    publisher: '',
    supplier: '',
    publishedDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated book data:', formData);
    // Add your update logic here
    navigate('/librarian/allbooks');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Edit Book</h1>
        <button
          onClick={() => navigate('/librarian/allbooks')}
          className="neumorph-sm px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Back to Books
        </button>
      </div>

      <div className="neumorph p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="neumorph-inset w-full p-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Publisher</label>
              <input
                type="text"
                name="publisher"
                value={formData.publisher}
                onChange={handleChange}
                className="neumorph-inset w-full p-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
              <input
                type="text"
                name="supplier"
                value={formData.supplier}
                onChange={handleChange}
                className="neumorph-inset w-full p-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Published Date</label>
              <input
                type="date"
                name="publishedDate"
                value={formData.publishedDate}
                onChange={handleChange}
                className="neumorph-inset w-full p-2 rounded"
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={() => navigate('/librarian/allbooks')}
              className="neumorph-sm px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="neumorph-sm px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;