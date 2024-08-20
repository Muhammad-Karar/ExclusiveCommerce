import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/CartReducer";

const AddToCartButton = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <button
            onClick={(e) => dispatch(addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                review: product.review,
                image: product.image,
                discount: product.discount,
                rating: product.rating,
                origprice: product.originalPrice,
            }))}
            className="bg-black text-white font-bold py-2 px-4 rounded-b-sm w-full"
        >
            Add To Cart
        </button>
    );
};

export default AddToCartButton;
