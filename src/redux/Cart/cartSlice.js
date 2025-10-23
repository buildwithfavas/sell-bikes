import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newData = action.payload;
      const existingData = state.cartItems.find(
        (item) => newData.id === item.id
      );
      if (existingData) {
        existingData.quantity += 1;
      } else {
        state.cartItems.push({ ...newData, quantity: 1, sold: false });
      }
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cart) => cart.id !== action.payload
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, val) => acc + val.price * val.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
    updateCart: (state, action) => {
      const { id, ...updatedData } = action.payload;
      state.cartItems = state.cartItems.map((data) =>
        data.id === id ? { ...data, ...updatedData } : data
      );
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, updateCart, clearCart } =
  cartSlice.actions;
