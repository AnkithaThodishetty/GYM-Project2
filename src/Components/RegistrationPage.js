import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    localStorage.setItem('user', JSON.stringify(formData));
    alert('Registration successful');
    navigate('/');
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://media.architecturaldigest.com/photos/58f7b3ab8bfbf566da78acab/master/w_6144,h_3795,c_limit/Design_Gyms_TMPL_Lower%20Body%20Room.jpg')" }}>
      <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg flex">
          <div className="w-1/2 hidden md:block">
            <img
              src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Registration"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password (8 characters)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                maxLength={8}
              />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
