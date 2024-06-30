import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import FS1 from '../assets/FSproduct1.png';
import FS2 from '../assets/FSproduct2.png';
import FS3 from '../assets/FSproduct3.png';
import FS4 from '../assets/FSproduct4.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';

export default function FlashSales() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "HAVIT HV-G92 Gamepad",
            image: FS1,
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: "-40%",
            reviews: 88,
        },
        {
            id: 2,
            name: "AK-900 Wired Keyboard",
            image: FS2,
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: "-35%",
            reviews: 75,
        },
        {
            id: 3,
            name: "IPS LCD Gaming Monitor",
            image: FS3,
            price: 370,
            originalPrice: 400,
            discount: 30,
            rating: "-30%",
            reviews: 99,
        },
        {
            id: 4,
            name: "S-Series Comfort Chair",
            image: FS4,
            price: 375,
            originalPrice: 400,
            discount: 25,
            rating: "-25%",
            reviews: 99,
        },
        {
            id: 5,
            name: "S-Series Comfort Chair",
            image: FS4,
            price: 375,
            originalPrice: 400,
            discount: 25,
            rating: "-25%",
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
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
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
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="p-2">
                        <div
                            className="bg-white relative"
                            onMouseEnter={() => setHoveredImageId(product.id)}
                            onMouseLeave={() => setHoveredImageId(null)}
                        >
                            <div className="relative">
                                <div className="absolute top-2 left-2 bg-red-400 text-xs text-white w-12 h-6 py-1 px-2 rounded-md">
                                    {product.rating}
                                </div>
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
                    </div>
                ))}
            </Slider>
            <div className="flex item-center justify-center m-8">
                <button className="bg-red-400 px-5 py-2 rounded-sm text-white hover:bg-red-600">View All Products</button>
            </div>
        </div>
    );
}