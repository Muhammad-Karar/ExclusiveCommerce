import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Exclusive</h2>
            <p className="text-gray-400 mb-2">Subscribe</p>
            <p className="text-gray-400">Get 10% off your first order</p>
            <div className="mt-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Enter your email</button>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Support</h2>
            <p className="text-gray-400 mb-2">111 Bijoy sarani, Dhaka,</p>
            <p className="text-gray-400 mb-2">DH 1515, Bangladesh.</p>
            <p className="text-gray-400 mb-2">exclusive@gmail.com</p>
            <p className="text-gray-400">+88015-88888-9999</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Account</h2>
            <ul className="text-gray-400">
              <li className="mb-2">My Account</li>
              <li className="mb-2">Login / Register</li>
              <li className="mb-2">Cart</li>
              <li className="mb-2">Wishlist</li>
              <li className="mb-2">Shop</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Link</h2>
            <ul className="text-gray-400">
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms Of Use</li>
              <li className="mb-2">FAQ</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <p className="text-gray-400">&copy; Copyright Rimel 2022. All right reserved</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;