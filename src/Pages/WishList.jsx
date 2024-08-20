import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/CartReducer';
import { getWishListItemsSelector, removeItemWishList } from '../redux/WishListReducer';
import { useNavigate } from 'react-router-dom';

export default function WishList() {
  const wishListItem = useSelector(getWishListItemsSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [hoveredImageId, setHoveredImageId] = useState(null);

  return (
    <div className="container mx-auto py-10 mt-20 max-w-screen-xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-red-500">Wishlist ({wishListItem.length})</h1>
        </div>
        <div>
          <button className="px-4 py-3 w-44 border rounded-md border border-2 
            text-red-600 font-bold hover:bg-gray-100 hover:duration-700">Move All to Cart</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-5 gap-4 justify-items-center items-center">
        {Array.isArray(wishListItem) && wishListItem.length > 0 ? (
          wishListItem.map((item, index) => (
            <div key={index} className="p-2">
              <div
                className="bg-white relative"
                onMouseEnter={() => setHoveredImageId(item.id)}
                onMouseLeave={() => setHoveredImageId(null)}
              >
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-red-400 text-xs text-white w-12 h-6 py-1 px-2 rounded-md">
                    - {item.discount}%
                  </div>
                  <div className="absolute top-1 right-2 flex flex-col gap-1 rounded-full">
                    <button
                      className="bg-white rounded-full w-8 h-8"
                      onClick={() => {
                        dispatch(addItemToWishList({
                          id: item.id,
                          name: item.name,
                          image: item.image,
                          price: item.price,
                          originalPrice: item.originalPrice,
                          discount: item.discount,
                          reviews: item.reviews
                        }));
                      }}
                    >
                    <FontAwesomeIcon onClick={() => dispatch(removeItemWishList({id: item.id}))}
                    icon={faTrashCan} style={{color: "#000000",}} />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full group">
                    {hoveredImageId === item.id && (
                      <button
                        onClick={(e) =>
                          dispatch(addItem({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                            discount: item.discount
                          }))}
                        className="bg-black text-white font-bold py-2 px-4 rounded-b-sm w-full"
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-scale-down rounded-sm bg-gray-100"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  <p className="text-sm">
                    <span className="text-red-500 font-bold">{item.price}</span>
                    <span className="text-gray-500 line-through ml-2">{item.originalPrice}</span>
                  </p>
                  <p className="text-sm text-gray-600">Discount: {item.discount}%</p>
                  <p className="text-sm text-gray-600">Reviews: {item.reviews}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='font-bold col-span-5'>No items in your wishlist.</div>
        )}
      </div>
      <div className="flex item-center justify-center m-8">
        <button  onClick={() => navigate('/')}
        className="bg-red-400 px-5 py-2 rounded-sm text-white hover:bg-red-600">Return to Shop</button>
      </div>
    </div>
  );
}
