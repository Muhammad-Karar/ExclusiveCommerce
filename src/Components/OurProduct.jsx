import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import EOproduct1 from '../assets/EOproduct1.png';
import EOproduct2 from '../assets/EOproduct2.png';
import EOproduct3 from '../assets/EOproduct3.png';
import EOproduct4 from '../assets/EOproduct4.png';
import EOproduct5 from '../assets/EOproduct5.png';
import EOproduct6 from '../assets/EOproduct6.png';
import EOproduct7 from '../assets/EOproduct7.png';
import EOproduct8 from '../assets/EOproduct8.png';
import Slider from "react-slick";
import '../OurProduct.css';

export default function OurProduct() {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Breed Dry Dog Food",
            image: EOproduct1,
            price: 100,
            reviews: 35,
        },
        {
            id: 2,
            name: "CANON EOS DSLR Camera",
            image: EOproduct2,
            price: 360,
            reviews: 65,
        },
        {
            id: 3,
            name: "ASUS FHD Gaming Laptop",
            image: EOproduct3,
            price: 700,
            reviews: 325,
        },
        {
            id: 4,
            name: "Curology Product Set",
            image: EOproduct4,
            price: 500,
            reviews: 145,
        },
        {
            id: 5,
            name: "Kids Electric Car",
            image: EOproduct5,
            price: 960,
            reviews: 65,
        },
        {
            id: 6,
            name: "Jr.Zoom Soccer Cleat",
            image: EOproduct6,
            price: 1160,
            reviews: 35,
        },
        {
            id: 7,
            name: "GP11 Shooter USB Gamepad",
            image: EOproduct7,
            price: 660,
            reviews: 55,
        },
        {
            id: 8,
            name: "Quilted Satin Jacket",
            image: EOproduct8,
            price: 660,
            reviews: 55,
        },
        {
            id: 9,
            name: "Quilted Satin Jacket",
            image: EOproduct8,
            price: 660,
            reviews: 55,
        },
        {
            id: 10,
            name: "Quilted Satin Jacket",
            image: EOproduct8,
            price: 660,
            reviews: 55,
        },
    ]);
    const [hoveredImageId, setHoveredImageId] = useState(null);
    var settings = {
        dots: true,
        className: "center",
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        rows: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container mx-auto py-10 max-w-screen-xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="bg-red-500 w-4 h-10 rounded-md mr-4"></div>
                    <h1 className="text-2xl font-bold text-red-500">Our Products</h1>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <h2 className="text-3xl font-bold text-gray-800 mt-3">
                        Explore Our Products
                    </h2>
                </div>
            </div>
            <Slider {...settings} className="two-row-slider">
                {products.map((product) => (
                    <div key={product.id} className="p-2">
                        <div
                            className="bg-white relative"
                            onMouseEnter={() => setHoveredImageId(product.id)}
                            onMouseLeave={() => setHoveredImageId(null)}
                        >
                            <div className="relative">
                                <div className="absolute top-1 right-2 flex flex-col gap-1 rounded-full">
                                    <button className="bg-white rounded-full w-8 h-8">
                                        <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full group">
                                    {hoveredImageId === product.id && (
                                        <button
                                            onClick={() => handleProductClick(product)}
                                            className="bg-black text-white font-bold py-2 px-4 rounded-b-sm w-full"
                                        >
                                            Add To Cart
                                        </button>
                                    )}
                                </div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-scale-down rounded-sm bg-gray-100"
                                />
                            </div>
                            <div className="p-2">
                                <h3 className="text-lg font-bold text-gray-800">
                                    {product.name}
                                </h3>
                                <p className="text-sm">
                                    <span className="text-red-500 font-bold">{product.price}</span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    Reviews: {product.reviews}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="flex item-center justify-center m-8">
                <button className="bg-red-400 px-5 py-2 rounded-sm text-white hover:bg-red-600">View All Products</button>
            </div>
        </div>
    )
}
