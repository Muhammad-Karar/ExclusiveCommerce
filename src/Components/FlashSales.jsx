import React, { useState, useEffect } from "react";

export default function FlashSales() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "HAVIT HV-G92 Gamepad",
            image: "https://i.ibb.co/ZVmP7v9/gamepad.png",
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 2,
            name: "AK-900 Wired Keyboard",
            image: "https://i.ibb.co/993g0D7/keyboard.png",
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: 5.6,
            reviews: 75,
        },
        {
            id: 3,
            name: "IPS LCD Gaming Monitor",
            image: "https://i.ibb.co/tL8Y38m/monitor.png",
            price: 370,
            originalPrice: 400,
            discount: 30,
            rating: 4.8,
            reviews: 99,
        },
        {
            id: 4,
            name: "S-Series Comfort Chair",
            image: "https://i.ibb.co/t3W7d9K/chair.png",
            price: 375,
            originalPrice: 400,
            discount: 25,
            rating: 4.7,
            reviews: 99,
        },
        {
            id: 5,
            name: "S-Series Comfort Chair",
            image: "https://i.ibb.co/t3W7d9K/chair.png",
            price: 375,
            originalPrice: 400,
            discount: 25,
            rating: 4.7,
            reviews: 99,
        },
    ]);

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 2,
        seconds: 56,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            let { days, hours, minutes, seconds } = countdown;

            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                seconds = 59;
                minutes--;
            } else if (hours > 0) {
                minutes = 59;
                seconds = 59;
                hours--;
            } else if (days > 0) {
                hours = 0;
                minutes = 2;
                seconds = 59;
                days--;
            } else {
                clearInterval(interval);
            }

            setCountdown({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown]);

    const [currentProduct, setCurrentProduct] = useState(null);
    const [showCart, setShowCart] = useState(false);

    const handleProductClick = (product) => {
        setCurrentProduct(product);
    };
    const [hoveredImageId, setHoveredImageId] = useState(null);


    return (
        <div className="min-h-screen">
            <div className="container mx-auto p-12">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="bg-red-500 w-4 h-10 rounded-md mr-4"></div>
                        <h1 className="text-2xl font-bold text-red-500">Today's</h1>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <h2 className="text-3xl font-bold text-gray-800 mt-3">
                            Flash Sales
                        </h2>
                    </div>
                    <div className="flex items-center mt-3 ml-5">
                        <div className="flex items-center ml-4">
                            <span className="text-3xl font-bold text-gray-800">
                                {countdown.days}
                            </span>
                            <span className="text-sm text-gray-600 ml-2">Days</span>
                        </div>
                        <div className="flex items-center ml-4">
                            <span className="text-3xl font-bold text-gray-800">
                                {countdown.hours}
                            </span>
                            <span className="text-sm text-gray-600 ml-2">Hours</span>
                        </div>
                        <div className="flex items-center ml-4">
                            <span className="text-3xl font-bold text-gray-800">
                                {countdown.minutes}
                            </span>
                            <span className="text-sm text-gray-600 ml-2">Minutes</span>
                        </div>
                        <div className="flex items-center ml-4">
                            <span className="text-3xl font-bold text-gray-800">
                                {countdown.seconds}
                            </span>
                            <span className="text-sm text-gray-600 ml-2">Seconds</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white relative"
                            onMouseEnter={() => setHoveredImageId(product.id)}
                            onMouseLeave={() => setHoveredImageId(null)}
                        >
                            <div class="relative">
                                <div class="absolute top-2 left-2 bg-red-500 text-sm font-bold py-1 px-2 rounded-md">
                                    {product.rating}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4 inline-block"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                    </svg>
                                </div>
                                <div class="absolute bottom-0">
                                    {hoveredImageId === product.id && (
                                        <button
                                            onClick={() => handleProductClick(product)}
                                            class="bg-black text-white font-bold py-2 px-4 rounded-b-md"
                                        >
                                            Add To Cart
                                        </button>
                                    )}
                                </div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    class="w-full h-48 object-cover rounded-md"
                                />
                                
                            </div>
                            <div className="p-2">
                                <h3 className="text-lg font-bold text-gray-800">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {product.originalPrice} → {product.price}
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
                {/* <div className="flex items-center justify-between mt-8">
                    
                    <div className="flex items-center">
                        <button
                            onClick={handleAddToCart}
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Add to Cart
                        </button>
                        {showCart && (
                            <div className="bg-white rounded-lg shadow-md p-4 absolute top-0 right-0 mt-4">
                                <h2 className="text-lg font-bold text-gray-800">
                                    Your Cart
                                </h2>
                                <ul>
                                    {products.map((product) => (
                                        <li key={product.id} className="flex items-center py-2">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-12 h-12 object-cover rounded-lg mr-4"
                                            />
                                            <span className="text-sm text-gray-600">
                                                {product.name}
                                            </span>
                                            <span className="text-sm text-gray-600 ml-4">
                                                {product.price}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={handleCloseCart}
                                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </div> */}
            </div>
        </div>
    );
}