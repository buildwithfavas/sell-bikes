import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/auth/authSlice";
import productSlice from "../redux/Product/productSlice";
import cartSlice from "../redux/Cart/cartSlice";
import loggingMiddleware from "../middleware/loggingMiddleware";

const store = configureStore({
  reducer: {
    auth: authSlice,
    items: productSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(loggingMiddleware)
  }
});

export default store;
