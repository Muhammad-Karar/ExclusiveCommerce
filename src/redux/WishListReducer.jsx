import { createSlice, createSelector } from "@reduxjs/toolkit";

const WishListReducer = createSlice({
    name: "WishList",
    initialState: [],
    reducers: {
        addItemToWishList: (state, action) => {
            state.push(action.payload);
        },
        removeItemWishList: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        },
    },
})

export const getWishListItemsSelector = createSelector(
    (state) => state.WishList,
    (state) => state
);

export const { addItemToWishList, removeItemWishList } = WishListReducer.actions;
export default WishListReducer.reducer;