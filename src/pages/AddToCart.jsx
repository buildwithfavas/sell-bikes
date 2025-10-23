import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import CartBox from "../components/CartBox";
import Checkout from "../components/Checkout";
import { clearCart } from "../redux/Cart/cartSlice";

const AddToCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-full shadow-lg">
              <ShoppingCart className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Your Cart
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 ml-16 text-lg">
              Review your selected vehicless
            </p>
            <button
              className="border border-blue-400 p-0.5 rounded-sm"
              onClick={clearCartItems}
            >
              clear Cart🧹
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className=" w-full flex items-center justify-between">
          <div className="space-y-4">
            {cartItems &&
              cartItems.map((data) => (
                <CartBox key={nanoid()} data={data} />
              ))}
          </div>
          <div>
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
