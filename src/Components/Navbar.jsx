import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 z-50 w-full">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-xl font-bold">Exclusive Commerce</div>
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:bg-red-400 hover:duration-700 hover:text-white rounded-md px-3 py-2 text-sm font-xl font-bold">Home</Link>
                    <Link to="/contact" className="hover:bg-red-400 hover:duration-700 hover:text-white rounded-md px-3 py-2 text-sm font-xl font-bold">Contact</Link>
                    <Link to="/about" className="hover:bg-red-400 hover:duration-700 hover:text-white rounded-md px-3 py-2 text-sm font-xl font-bold">About</Link>
                    <Link to="/signup" className="hover:bg-red-400 hover:duration-700 hover:text-white rounded-md px-3 py-2 text-sm font-xl font-bold">Sign Up</Link>
                </div>
                <div className="flex justify-end items-center">
                    <div className="hidden md:flex space-x-4 relative">
                        <input
                            type="text"
                            placeholder="what are you looking?"
                            className="border-2 rounded-md px-2 py-2 pl-10 hover:border-2 hover:border-red-400 hover:duration-700 focus:outline-none"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <button className="rounded-full bg-gray-200 w-10 px-2.5 hover:bg-red-400 hover:text-white hover:duration-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>
                        <button className="rounded-full bg-gray-200 w-10 px-2.5 hover:bg-red-400 hover:text-white hover:duration-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="md:hidden relative inset-y-0 left-0 flex items-center">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:hidden hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
                        Home
                    </Link>
                    <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
                        Contact
                    </Link>
                    <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
                        About
                    </Link>
                    <Link to="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
                        Sign Up
                    </Link>
                </div>
                <div className="px-2 py-2 flex justify-center gap-3 space-y-1 sm:px-3">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="border rounded-md px-3 py-2 focus:outline-none"
                    />
                    <button className="rounded-full bg-gray-200 w-10 px-2.5 hover:bg-red-400 hover:text-white hover:duration-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                    <button className="rounded-full bg-gray-200 w-10 px-2.5 hover:bg-red-400 hover:text-white hover:duration-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>
                    <button className="rounded-full bg-gray-200 w-10 px-2.5 hover:bg-red-400 hover:text-white hover:duration-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
