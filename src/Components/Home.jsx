import React, { useState, useEffect } from 'react';
import Image1 from '../assets/slidepic1.jpg'; // Replace with your image paths
import Image2 from '../assets/slidepic2.jpg';
import Image3 from '../assets/slidepic3.jpg';

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [Image1, Image2, Image3];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change the interval for slide duration (milliseconds)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex">
            <div className="w-1/5 pl-14 pt-5  border-r border-black">
                <ul>
                    <li className="mb-2">
                        <a
                            href="#"
                            className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-950 hover:font-bold"
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
                        <a href="#"  className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-950 hover:font-bold"
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
                        <a href="#"  className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-950 hover:font-bold"
                        >Electronics
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#"  className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-950 hover:font-bold"
                        >Home & Lifestyle
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#"  className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-950 hover:font-bold"
                        >Medicine
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#"  className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-950 hover:font-bold"
                        >Sports & Outdoor
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#"  className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-950 hover:font-bold"
                        >Baby's & Toys
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#"  className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-950 hover:font-bold"
                        >Groceries & Pets
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#"  className="flex items-center text-gray-700 transition duration-0 ease-in-out font-normal hover:duration-700 hover:text-red-950 hover:font-bold"
                        >Health & Beauty
                        </a>
                    </li>
                </ul>
            </div>
            <div className="w-3/4 p-10">
                <div className="relative h-96">
                    <img
                        src={images[activeIndex]}
                        alt="Slider Image"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 justify-center">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-2 rounded-full ${index === activeIndex ? 'bg-red-500' : 'bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}