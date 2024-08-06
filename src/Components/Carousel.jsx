import React, { useState, useEffect } from 'react';
import Image1 from '../assets/slidepic1.jpg'; // Replace with your image paths
import Image2 from '../assets/slidepic2.jpg';
import Image3 from '../assets/slidepic3.jpg';

export default function Carousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const images = [Image1, Image2, Image3];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change the interval for slide duration (milliseconds)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-3/4 p-10 mt-14">
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
    )
}
