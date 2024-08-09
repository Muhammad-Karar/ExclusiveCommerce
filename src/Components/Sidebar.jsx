import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="w-2/5 mt-14 md:w-1/5 md:pl-14 md:pt-5 md:mt-14 border-r border-black">
            <ul>
                <li className="mb-2">
                    <Link
                        to="/womwnsF"
                        className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Woman's Fashion
                        <svg
                            className="ml-2 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/mensF" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Men's Fashion
                        <svg
                            className="ml-2 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/electronic" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Electronics
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/homeAStyle" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Home & Lifestyle
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/medicine" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Medicine
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/sportAoutDoor" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Sports & Outdoor
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/babyAtoys" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Baby's & Toys
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/groceriesApets" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Groceries & Pets
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/healthAbeauity" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Health & Beauty
                    </Link>
                </li>
            </ul>
        </div>
    )
}
