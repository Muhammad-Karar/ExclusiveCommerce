import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import '../App.css';
import { BestSellingData } from '../redux/Api';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartReducer";
import { toggleWishListItem, getWishListItemsSelector } from "../redux/WishListReducer";

export default function BestSellingProductus() {

    const dispatch = useDispatch();
    const wishListItems = useSelector(getWishListItemsSelector); // Select wishlist items from state

    // Helper function to check if an item is in the wishlist
    const isItemInWishList = (productId) => {
        return wishListItems.some(item => item.id === productId);
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
            <Slider {...settings}>
                {BestSellingData.map((product) => (
                    <div key={product.id} className="p-2">
                        <div
                            className="bg-white relative"
                            onMouseEnter={() => setHoveredImageId(product.id)}
                            onMouseLeave={() => setHoveredImageId(null)}
                        >
                            <div className="relative">
                                <div className="absolute top-1 right-2 flex flex-col gap-1 rounded-full">
                                    <button
                                        onClick={() => dispatch(toggleWishListItem({
                                            id: product.id,
                                            name: product.name,
                                            image: product.image,
                                            price: product.price,
                                            reviews: product.reviews,
                                            discount: product.discount
                                        }))}
                                        className="bg-white rounded-full w-8 h-8"
                                    >
                                        <FontAwesomeIcon
                                            icon={isItemInWishList(product.id) ? solidHeart : regularHeart}
                                            className={`w-4 h-4 ${isItemInWishList(product.id) ? "text-red-500" : "text-gray-600"}`}
                                        />
                                    </button>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full group">
                                    {hoveredImageId === product.id && (
                                        <button
                                            onClick={(e) => dispatch(addItem({
                                                id: product.id,
                                                name: product.name, price: product.price, image: product.image,
                                                discount: product.discount
                                            }))}
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
        </div>
    )
}
