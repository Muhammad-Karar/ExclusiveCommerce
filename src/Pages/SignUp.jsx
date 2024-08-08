import React, { useState } from 'react';
import SignUpimg1 from '../assets/SignUpimg1.png';
import G from '../assets/G.png';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white mt-20">
      <div className="order-1 md:order-1 w-full md:w-1/2 bg-white">
        <img
          src={SignUpimg1}
          alt="Shopping Cart"
          className="w-full h-5/6 object-cover rounded-r-sm"
        />
      </div>
      <div className="order-2 md:order-2 flex flex-col w-full max-w-md px-20 py-12 mx-auto sm:px-10 sm:py-8 sm:mx-20 md:px-20 md:py-12">
        <div className="flex justify-center item-center">
          <h2 className="tracking-wider md:text-3xl font-bold text-gray-700 sm:text-lg">Create an account</h2>
        </div>  
        <div className="flex justify-center item-center">
          <h3 className="text-sm text-gray-700 mb-6">Enter your Details below</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="peer placeholder-transparent w-full focus:outline-none border-b-2 border-gray-300 focus:border-gray-500 transition-all duration-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email or Phone Number
            </label>
            <input
              type="email"
              id="email"
              className="peer placeholder-transparent w-full focus:outline-none border-b-2 border-gray-300 focus:border-gray-500 transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="peer placeholder-transparent w-full focus:outline-none border-b-2 border-gray-300 focus:border-gray-500 transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 flex justify-center item-center">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 hover:duration-700 text-white font-bold py-2 w-full rounded focus:outline-none focus-shadow-outline"
            >
              Create Account
            </button>
          </div>
          <div className="mb-4 flex justify-center items-center">
            <a
              href="#"
              className="text-gray-700 font-bold py-2 px-12 w-full rounded inline-flex border md:text-md sm:text-sm"
            >
              <img src={G} alt="" className="w-5 h-5 mr-2" />
              Sign up with Google
            </a>
          </div>
          <div className="mt-4 text-center">
            Already have an account? <Link to="/login" className="underline">Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
