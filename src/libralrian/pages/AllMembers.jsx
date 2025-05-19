import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllMembers = () => {
  const navigate = useNavigate();
  // This would normally come from an API
  const [members] = useState([
    {
      id: 1,
      name: 'John Doe',
      phone: '+1234567890',
      status: 'student',
      class: '12A'
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: '+1234567891',
      status: 'teacher',
      class: null
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700">All Members</h2>
        <div className="neumorph-inset px-4 py-2 w-64">
          <input
            type="text"
            placeholder="Search members..."
            className="bg-transparent w-full outline-none text-gray-700"
          />
        </div>
      </div>

      <div className="neumorph overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Phone</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Class</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="border-t border-gray-200">
                  <td className="px-6 py-4">{member.name}</td>
                  <td className="px-6 py-4">{member.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      member.status === 'teacher' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{member.class || '-'}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="neumorph-sm p-2" title="Edit" onClick={() => navigate(`/librarian/editmember/${member.id}`)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                      <button className="neumorph-sm p-2" title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
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

export default AllMembers; 