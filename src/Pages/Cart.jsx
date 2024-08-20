import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import BreadCrumb from '../Components/BreadCrumb';
import { useSelector, useDispatch } from 'react-redux';
import { getItemsSelector, removeItem, increaseQuantity, decreaseQuantity } from '../redux/CartReducer';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const cartItems = useSelector(getItemsSelector);
    const total = useSelector(state => state.Cart.total);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="mt-20 py-8">
            <BreadCrumb />
            <div className="container mx-auto py-10 max-w-screen-xl space-y-6">
                {/* Table Header */}
                <div className="grid grid-cols-4 bg-gray-100 p-4 rounded-sm shadow-lg">
                    <span className="font-semibold text-left">Product</span>
                    <span className="font-semibold text-center">Price</span>
                    <span className="font-semibold text-center">Quantity</span>
                    <span className="font-semibold text-right">Subtotal</span>
                </div>

                {/* Product Rows */}
                {cartItems.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-sm mb-4">
                        <div className="grid grid-cols-4 items-center p-4 border-b">
                            <div className="relative flex items-center text-left">
                                <FontAwesomeIcon
                                    onClick={() => dispatch(removeItem({ id: item.id }))}
                                    className="absolute -top-1 -left-2 cursor-pointer"
                                    icon={faCircleXmark}
                                    style={{ color: "#ae0a0a" }}
                                />
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-scale-down"
                                />
                                <span className="ml-4 font-medium">{item.name}</span>
                            </div>
                            <span className="font-medium text-center">${item.price}</span>
                            <div className="w-28 mx-auto text-center">
                                <div className="p-4 w-full flex justify-between border rounded-sm text-center">
                                    <button onClick={() => dispatch(decreaseQuantity({ id: item.id }))} className="font-bold text-xl">-</button>
                                    <div className="font-bold text-lg">{item.Quantity}</div>
                                    <button onClick={() => dispatch(increaseQuantity({ id: item.id }))} 
                                    className="font-bold text-xl">+</button>
                                </div>
                            </div>
                            <span className="font-medium text-right">${item.totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                ))}

                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                    <button onClick={() => navigate('/')} className="px-4 py-3 w-44 border rounded-md border border-2 
                    font-bold hover:bg-gray-100 hover:duration-700">Return To Shop</button>
                </div>

                {/* Coupon Section */}
                <div className="flex flex-col md:flex-row justify-between items-start pt-20 space-y-4 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-2 md:space-y-0 w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="border rounded px-4 py-2 w-60 border border-black"
                        />
                        <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600 hover:duration-700">
                            Apply Coupon
                        </button>
                    </div>

                    {/* Cart Total Section */}
                    <div className="border border-2 border-black rounded-md p-6 w-96">
                        <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium">Subtotal:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium">Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="border-t my-4"></div>
                        <div className="flex justify-between mb-4">
                            <span className="font-medium">Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="bg-red-400 text-white px-4 py-2 rounded w-full hover:bg-red-600 hover:duration-700">
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
