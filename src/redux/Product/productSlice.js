import { createSlice, nanoid } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push({
        id: nanoid(),
        sold: false,
        ...action.payload,
      });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) { //not neccessary but can consider for saftey
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
    markAsSold: (state, action) => {
      const id = action.payload
      const product = state.items.find(item => item.id === id)
      if (product) {
        product.sold = true
      }
    }
  },
});

export const { addItems, removeItem, updateItem, markAsSold } = productSlice.actions;
export default productSlice.reducer;
