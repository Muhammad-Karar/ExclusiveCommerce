import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { MEProductData } from "../redux/Api";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartReducer";
import { toggleWishListItem, getWishListItemsSelector } from "../redux/WishListReducer";

export default function PromoBanner() {

  const dispatch = useDispatch();
  const wishlistItems = useSelector(getWishListItemsSelector);

  // Helper function to check if an item is in the wishlist
  const isItemInWishList = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const [countdown, setCountdown] = useState({
    days: 5,
    hours: 4,
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

  const handleBuyNowClick = () => {
    Swal.fire({
      title: 'Choose the option',
      showCloseButton: true,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `<i class="fas fa-cart-shopping"></i> Add to Cart`,
      denyButtonText: `<i class="fas fa-heart"></i> Wishlist`,
      cancelButtonText: 'Proceed to Checkout',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Added to cart successfully",
          showConfirmButton: false,
          timer: 1500
        });
        dispatch(addItem({
          id: MEProductData[0].id,
          image: MEProductData[0].image,
          price: MEProductData[0].price
        }));
      } else if (result.isDenied) {
        const wishListMessage = isItemInWishList(MEProductData[0].id)
        ? "Removed from wish list"
        : "Added to wish list";
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: wishListMessage,
          showConfirmButton: false,
          timer: 1500
        });
        dispatch(toggleWishListItem({
          id: MEProductData[0].id,
          image: MEProductData[0].image,
          price: MEProductData[0].price
        }));
      } else {
        console.log("proceed to check out")
      }
    });
  };


  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 mx-auto p-12 m-12 max-w-screen-xl">
      <div className='w-full md:w-1/2 h-auto space-y-6 md:space-y-18'>
        <h2 className="text-green-500 text-lg font-bold mt-2">Categories</h2>
        <h1 className="text-4xl font-bold w-full md:w-80">Enhance Your Music Experience</h1>
        <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-6 mt-8">
          <div className="text-center bg-white text-black rounded-full py-2 w-16 h-16">
            <p className="text-sm font-bold">{countdown.days}</p>
            <p className="text-sm">Days</p>
          </div>
          <div className="text-center bg-white text-black rounded-full py-2 w-16 h-16">
            <p className="text-sm font-bold">{countdown.hours}</p>
            <p className="text-sm">Hours</p>
          </div>
          <div className="text-center bg-white text-black rounded-full py-2 w-16 h-16">
            <p className="text-sm font-bold">{countdown.minutes}</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div className="text-center bg-white text-black rounded-full py-2 w-16 h-16">
            <p className="text-sm font-bold">{countdown.seconds}</p>
            <p className="text-sm">Seconds</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start mt-6">
          <button onClick={handleBuyNowClick}
            className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-700 hover:duration-700">
            Buy Now!
          </button>
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <img src={MEProductData[0].image} alt="JBL Speaker" className="w-full max-w-lg mx-auto" />
      </div>
    </div>

  )
}
