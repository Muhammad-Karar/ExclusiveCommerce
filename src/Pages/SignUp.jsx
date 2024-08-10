import React, { useState } from 'react';
import SignUpimg1 from '../assets/SignUpimg1.png';
import G from '../assets/G.png';
import { Link } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BreadCrumb from '../Components/BreadCrumb';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiable, setVisibility] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="mt-20">
      <BreadCrumb />
      <div className="flex flex-col md:flex-row min-h-screen bg-white">
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
            <div className="relative mb-6">
              <input
                type="text"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="name"
                className="absolute text-gray-700 text-sm font-bold duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="absolute text-gray-700 text-sm font-bold duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email or Phone Number
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type={visiable ? "text" : "password"}
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password" className="absolute text-gray-700 text-sm font-bold duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
              <div className="absolute top-2 right-0 p-2 cursor-pointer" onClick={() => setVisibility(!visiable)}>
                {visiable ? <FontAwesomeIcon icon={faEyeSlash} className="w-4 h-4 text-gray-600" /> : <FontAwesomeIcon icon={faEye} className="w-4 h-4 text-gray-600" />}
              </div>
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
                className="text-gray-700 font-bold py-2 px-12 w-full rounded inline-flex border text-sm md:text-md"
              >
                <img src={G} alt="" className="w-5 h-5 mr-2" />
                Sign up with Google
              </a>
            </div>

            <div className="mt-4 text-center">
              Already have an account? <Link to="/signup/login" className="underline">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
