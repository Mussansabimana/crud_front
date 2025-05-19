import React, { useState } from 'react';

const AddBook = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your API call here
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add New Book</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="neumorph-inset p-6 space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-2">
              Book Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input w-full"
              placeholder="Enter book title"
              required
            />
          </div>

          <div>
            <label htmlFor="publisher" className="block text-sm font-medium text-gray-600 mb-2">
              Publisher
            </label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              value={formData.publisher}
              onChange={handleChange}
              className="input w-full"
              placeholder="Enter publisher name"
              required
            />
          </div>

          <div>
            <label htmlFor="supplier" className="block text-sm font-medium text-gray-600 mb-2">
              Supplier
            </label>
            <input
              type="text"
              id="supplier"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              className="input w-full"
              placeholder="Enter supplier name"
              required
            />
          </div>

          <div>
            <label htmlFor="publishedDate" className="block text-sm font-medium text-gray-600 mb-2">
              Published Date
            </label>
            <input
              type="date"
              id="publishedDate"
              name="publishedDate"
              value={formData.publishedDate}
              onChange={handleChange}
              className="input w-full"
              required
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="btn-primary bg-transparent px-6"
            onClick={() => setFormData({
              title: '',
              publisher: '',
              supplier: '',
              publishedDate: ''
            })}
          >
            Reset
          </button>
          <button
            type="submit"
            className="btn-primary px-6"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
