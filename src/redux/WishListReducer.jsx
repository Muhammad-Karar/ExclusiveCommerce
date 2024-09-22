import { createSlice, createSelector } from "@reduxjs/toolkit";

const WishListReducer = createSlice({
    name: "WishList",
    initialState: {
        WishList: [],
    },
    reducers: {
        removeItemWishList: (state, action) => {
            state.WishList = state.WishList.filter(item => item.id !== action.payload.id);
        },
        toggleWishListItem: (state, action) => {
            const wishItem = action.payload;
            const existingWishItem = state.WishList.find(wishListItem => wishListItem.id === wishItem.id);
            if (existingWishItem) {
                // Remove item if it exists
                state.WishList = state.WishList.filter(item => item.id !== wishItem.id);
            } else {
                // Add item if it doesn't exist
                const newItem = {
                    id: wishItem.id,
                    name: wishItem.name,
                    image: wishItem.image,
                    price: wishItem.price,
                    reviews: wishItem.reviews
                };

                // Only add discount if it exists
                if (wishItem.discount) {
                    newItem.discount = wishItem.discount;
                }

                state.WishList.push(newItem);
            }
        },
    },
})

export const getWishListItemsSelector = createSelector(
    (state) => state.WishList.WishList,
    (WishList) => WishList
);

export const { removeItemWishList, toggleWishListItem } = WishListReducer.actions;
export default WishListReducer.reducer;