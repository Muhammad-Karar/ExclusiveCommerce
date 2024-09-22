import { createSlice, createSelector } from '@reduxjs/toolkit';

const CartReducer = createSlice({
    name: "Cart",
    initialState: {
        Cart: [],
        total: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.Cart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.Quantity += 1;
                existingItem.totalPrice = existingItem.Quantity * existingItem.price;
            } else {
                state.Cart.push({
                    ...item,
                    Quantity: 1,
                    totalPrice: item.price,
                });
            }
            // Update the total price
            state.total = state.Cart.reduce((sum, cartItem) => sum + cartItem.totalPrice, 0);
        },
        removeItem: (state, action) => {
            state.Cart = state.Cart.filter(item => item.id !== action.payload.id);
            // Update the total price
            state.total = state.Cart.reduce((sum, cartItem) => sum + cartItem.totalPrice, 0);
        },
        increaseQuantity: (state, { payload }) => {
            const cartItem = state.Cart.find((item) => item.id === payload.id);
            console.log(cartItem);
            if (cartItem) {
                cartItem.Quantity += 1;
                cartItem.totalPrice = cartItem.Quantity * cartItem.price;
            }
            // Update the total price
            state.total = state.Cart.reduce((sum, item) => sum + item.totalPrice, 0);
        },
        decreaseQuantity: (state, { payload }) => {
            const cartItem = state.Cart.find((item) => item.id === payload.id);
            if (cartItem && cartItem.Quantity > 1) {
                cartItem.Quantity -= 1;
                cartItem.totalPrice = cartItem.Quantity * cartItem.price;
            }
            // Update the total price
            state.total = state.Cart.reduce((sum, item) => sum + item.totalPrice, 0);
        },
        clearCart: (state) => {
            state.Cart = [];
            state.total = state.Cart.reduce((sum, item) => sum + item.totalPrice, 0);
        },
    },
});

export const getItemsSelector = createSelector(
    (state) => state.Cart.Cart,
    (Cart) => Cart
);

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = CartReducer.actions; 
export default CartReducer.reducer;
