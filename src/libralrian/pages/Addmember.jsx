import React, { useState } from 'react';

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    status: '',
    memberClass: ''
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
      const submitData = {
        name: formData.name,
        phone: formData.phone,
        password: formData.password,
        status: formData.status,
        ...(formData.status === 'student' && { class: formData.memberClass })
      };
      console.log('Form submitted:', submitData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add New Member</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="neumorph-inset p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input w-full"
              placeholder="Enter full name"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input w-full"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input w-full"
              placeholder="Enter password"
              required
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-600 mb-2">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="">Select status</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          {formData.status === 'student' && (
            <div>
              <label htmlFor="memberClass" className="block text-sm font-medium text-gray-600 mb-2">
                Class
              </label>
              <input
                type="text"
                id="memberClass"
                name="memberClass"
                value={formData.memberClass}
                onChange={handleChange}
                className="input w-full"
                placeholder="Enter class"
                required={formData.status === 'student'}
              />
            </div>
          )}
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="btn-primary bg-transparent px-6"
            onClick={() => setFormData({
              name: '',
              phone: '',
              password: '',
              status: '',
              memberClass: ''
            })}
          >
            Reset
          </button>
          <button
            type="submit"
            className="btn-primary px-6"
          >
            Add Member
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMember;
