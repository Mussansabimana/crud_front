import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    password: ''
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
      const { name, password } = formData;
      // Add your API call here
      console.log('Login form submitted:', { name, password });
      // On successful login, navigate to librarian dashboard
      navigate('/librarian/overview');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0e5ec]">
      <div className="neumorph p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Librarian Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                Username
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input w-full"
                placeholder="Enter your username"
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
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary w-full py-3"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="/librarian/register" className="text-sm text-accent-blue hover:underline">
            Don't have an account? Register here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
