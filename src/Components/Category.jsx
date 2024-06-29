import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faDesktop, faClock, faCamera, faHeadphones, faGamepad } from '@fortawesome/free-solid-svg-icons';

const categories = [
    { name: 'Phones', icon: faMobile, id: 1 },
    { name: 'Computers', icon: faDesktop, id: 2 },
    { name: 'SmartWatch', icon: faClock, id: 3 },
    { name: 'Camera', icon: faCamera, id: 4 },
    { name: 'HeadPhones', icon: faHeadphones, id: 5 },
    { name: 'Gaming', icon: faGamepad, id: 6 }
];


export default function Category() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (id) => {
        setSelectedCategory(id);
    };

    return (
        <div className="container mx-auto py-10 border-y-2 max-w-screen-xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="bg-red-500 w-4 h-10 rounded-md mr-4"></div>
                    <h1 className="text-red-500 text-xl font-bold">Categories</h1>
                </div>
            </div>
            <div className="flex items-center">
                <h2 className="text-3xl font-bold text-gray-800 mt-3">
                    Browse By Category
                </h2>
            </div>
            <div className="flex items-center justify-center m-10">
                <button className="p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`p-4 border rounded-md flex flex-col items-center cursor-pointer 
                                ${selectedCategory === category.id ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            <div className="text-4xl mb-2">
                                <FontAwesomeIcon icon={category.icon} />
                            </div>
                            <div className="text-lg font-semibold">{category.name}</div>
                        </div>
                    ))}
                </div>
                <button className="p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}
