import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./redux/CartReducer";
import WishListReducer from "./redux/WishListReducer";

const Store = configureStore({
    reducer:{
        Cart: CartReducer,
        WishList: WishListReducer,
    }
})
export default Store;