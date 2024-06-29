import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import BSproduct1 from '../assets/BSproduct1.png';
import BSproduct2 from '../assets/BSproduct2.png';
import BSproduct3 from '../assets/BSproduct3.png';
import BSproduct4 from '../assets/BSproduct4.png';
import Slider from "react-slick";

export default function BestSellingProductus() {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "The north coat",
            image: BSproduct1,
            price: 260,
            originalPrice: 360,
            discount: 40,
            reviews: 65,
        },
        {
            id: 2,
            name: "Gucci duffle bag",
            image: BSproduct2,
            price: 960,
            originalPrice: 1160,
            discount: 35,
            reviews: 65,
        },
        {
            id: 3,
            name: "RGB liquid CPU Cooler",
            image: BSproduct3,
            price: 160,
            originalPrice: 170,
            discount: 30,
            reviews: 65,
        },
        {
            id: 4,
            name: "Small Bookself",
            image: BSproduct4,
            price: 360,
            originalPrice: 400,
            discount: 25,
            reviews: 65,
        },
        {
            id: 5,
            name: "Small Bookself",
            image: BSproduct4,
            price: 360,
            originalPrice: 400,
            discount: 25,
            reviews: 65,
        },
    ]);
    const [hoveredImageId, setHoveredImageId] = useState(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container mx-auto py-10 max-w-screen-xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="bg-red-500 w-4 h-10 rounded-md mr-4"></div>
                    <h1 className="text-2xl font-bold text-red-500">This Month</h1>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <h2 className="text-3xl font-bold text-gray-800 mt-3">
                        Best Selling Products
                    </h2>
                </div>
                <div className="flex item-center justify-center m-4">
                    <button className="bg-red-400 px-5 py-2 rounded-sm text-white hover:bg-red-600">View All</button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white relative"
                        onMouseEnter={() => setHoveredImageId(product.id)}
                        onMouseLeave={() => setHoveredImageId(null)}
                    >
                        <div className="relative">
                            <div className="absolute top-1 right-2 flex flex-col gap-1 rounded-full">
                                <button className="bg-white rounded-full w-8 h-8">
                                    <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-gray-600" />
                                </button>
                                <button className="bg-white rounded-full w-8 h-8">
                                    <FontAwesomeIcon icon={faEye} className="w-4 h-4text-gray-600" />
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
                                <span className="text-gray-500 line-through ml-2">{product.originalPrice}</span>
                            </p>
                            <p className="text-sm text-gray-600">
                                Discount: {product.discount}%
                            </p>
                            <p className="text-sm text-gray-600">
                                Reviews: {product.reviews}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
