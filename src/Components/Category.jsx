import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faDesktop, faClock, faCamera, faHeadphones, faGamepad } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';

const categories = [
    { name: 'Phones', icon: faMobile, id: 1 },
    { name: 'Computers', icon: faDesktop, id: 2 },
    { name: 'SmartWatch', icon: faClock, id: 3 },
    { name: 'Camera', icon: faCamera, id: 4 },
    { name: 'HeadPhones', icon: faHeadphones, id: 5 },
    { name: 'Gaming', icon: faGamepad, id: 6 },
    { name: 'Gaming', icon: faGamepad, id: 7 },
    { name: 'Gaming', icon: faGamepad, id: 8 }
];


export default function Category() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (id) => {
        setSelectedCategory(id);
    };
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
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
            <Slider {...settings}>
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className='px-1 sm:px-2 my-2 sm:my-4"'
                        onClick={() => handleCategoryClick(category.id)} 
                    >
                        <div className={`h-28 w-32 sm:h-32 sm:w-40 border rounded-md flex flex-col items-center justify-center cursor-pointer
            ${selectedCategory === category.id ? 'bg-red-500 text-white' : 'bg-white text-black'}`}>
                            <div className="text-3xl sm:text-4xl mb-2">
                                <FontAwesomeIcon icon={category.icon} />
                            </div>
                            <div className="text-sm sm:text-lg font-semibold">{category.name}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
