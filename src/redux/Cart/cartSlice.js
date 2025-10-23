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
      ChangeTotalPrice(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cart) => cart.id !== action.payload
      );
      ChangeTotalPrice(state);
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;

      const item = state.cartItems.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
      ChangeTotalPrice(state);
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
      ChangeTotalPrice(state);
    },
  },
});

const ChangeTotalPrice = (state) => {
  state.totalPrice = state.cartItems.reduce(
    (acc, val) => acc + val.price * val.quantity,
    0
  );
}

export default cartSlice.reducer;
export const { addToCart, removeFromCart, decreaseQuantity, updateCart, clearCart } =
  cartSlice.actions;
