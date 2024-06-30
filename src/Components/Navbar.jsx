import React from 'react';

function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 z-50 w-full">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-xl font-bold">Exclusive Commerce</div>
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="hover:bg-red-400 hover:duration-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium font-bold">Home</a>
                    <a href="#" className="hover:bg-red-400 hover:duration-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium font-bold">Contact</a>
                    <a href="#" className="hover:bg-red-400 hover:duration-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium font-bold">About</a>
                    <a href="#" className="hover:bg-red-400 hover:duration-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium font-bold">Sign Up</a>
                </div>
                <div className="flex justify-end items-center">
                    <div className="hidden md:flex space-x-4">
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
                    <div className="md:hidden relative inset-y-0 left-0 flex items-center">
                        <input type="checkbox" id="menu-toggle" className="peer hidden" />
                        <label
                            htmlFor="menu-toggle"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6 peer-checked:hidden"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            <svg
                                className="hidden h-6 w-6 peer-checked:block"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
            <div className="md:hidden hidden peer-checked:block" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
                        Home
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
                        Contact
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
                        About
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;