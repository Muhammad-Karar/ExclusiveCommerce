import React, { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-xl font-bold">Exclusive Commerce</div>
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="hover:text-gray-700 hover:underline font-bold">Home</a>
                    <a href="#" className="hover:text-gray-700 hover:underline font-bold">Contact</a>
                    <a href="#" className="hover:text-gray-700 hover:underline font-bold">About</a>
                    <a href="#" className="hover:text-gray-700 hover:underline font-bold">Sign Up</a>
                </div>
                <div className="flex justify-end">
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="border rounded-md px-3 py-2 focus:outline-none"
                        />
                        <button className="rounded-full bg-gray-200 p-2">
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
                        <button className="rounded-full bg-gray-200 p-2">
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
                        <button className="rounded-full bg-gray-200 p-2">
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
                    <button
                        className="md:hidden rounded-full bg-gray-200 p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
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
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    {menuOpen && (
                        <div className="absolute top-12 right-0 w-40 bg-white shadow-md py-2">
                            <a href="#" className="block px-4 py-2 hover:text-gray-700">
                                Home
                            </a>
                            <a href="#" className="block px-4 py-2 hover:text-gray-700">
                                Contact
                            </a>
                            <a href="#" className="block px-4 py-2 hover:text-gray-700">
                                About
                            </a>
                            <a href="#" className="block px-4 py-2 hover:text-gray-700">
                                Sign Up
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;