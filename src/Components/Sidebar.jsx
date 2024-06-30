import React from 'react'

export default function Sidebar() {
    return (
        <div className="w-1/5 pl-14 pt-5 mt-14 border-r border-black">
            <ul>
                <li className="mb-2">
                    <a
                        href="#"
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
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
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
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Electronics
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Home & Lifestyle
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Medicine
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Sports & Outdoor
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Baby's & Toys
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Groceries & Pets
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-400 hover:font-bold"
                    >Health & Beauty
                    </a>
                </li>
            </ul>
        </div>
    )
}
