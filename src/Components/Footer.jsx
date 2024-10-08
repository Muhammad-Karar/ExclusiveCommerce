import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-20 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 p-5 md:grid-cols-4 sm:grid-cols-3 gap-8">
          <div className="pl-14">
            <h2 className="text-xl font-bold mb-4">Exclusive</h2>
            <p className="text-lg mb-2">Subscribe</p>
            <p className="text-md">Get 10% off your first order</p>
            <div class="mt-4 relative sm:max-w-md mx-auto">
              <input type="text" class="bg-black text-gray-400 py-2 px-4 pr-10 border-2 rounded w-full sm:pr-12" placeholder="Enter your email" />
              <span class="absolute top-1/2 transform -translate-y-1/2 right-4 sm:right-6">
                <i class="fas fa-paper-plane text-gray-400"></i>
              </span>
            </div>
          </div>
          <div className="pl-14">
            <h2 className="text-xl font-bold mb-4">Support</h2>
            <p className="text-md mb-2">111 Bijoy sarani, Dhaka,</p>
            <p className="text-md mb-2">DH 1515, Bangladesh.</p>
            <p className="text-md mb-2">exclusive@gmail.com</p>
            <p className="text-md">+88015-88888-9999</p>
          </div>
          <div className="pl-14">
            <h2 className="text-xl font-bold mb-4">Account</h2>
            <ul className="text-md">
              <li className="mb-2">My Account</li>
              <li className="mb-2">Login / Register</li>
              <li className="mb-2">Cart</li>
              <li className="mb-2">Wishlist</li>
              <li className="mb-2">Shop</li>
            </ul>
          </div>
          <div className="pl-10">
            <h2 className="text-xl font-bold mb-4">Quick Link</h2>
            <ul className="text-md">
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms Of Use</li>
              <li className="mb-2">FAQ</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
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
        <p className=" mt-4 flex item-center justify-center border-t border-gray-800">© Copyright Rimel 2022. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;