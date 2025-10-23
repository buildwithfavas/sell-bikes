import { useDispatch } from "react-redux";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
} from "../redux/Cart/cartSlice";

const CartBox = ({ data }) => {
  const dispatch = useDispatch();

  const HandleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="flex gap-4 p-4">
        {/* Image Section */}
        <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
          <img
            src={data.image}
            alt={data.bikeName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Top Section - Name and Remove Button */}
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {data.bikeName}
              </h3>
              <p className="text-sm text-gray-500">${data.price}</p>
            </div>
            <button
              className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
              onClick={() => HandleDelete(data.id)}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Section - Quantity and Price */}
          <div className="flex justify-between items-center mt-2">
            <div className="text-right w-full">
              <p className="text-xs text-gray-500">Total</p>
              <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ${data.price * data.quantity}
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center justify-center gap-2 mt-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(data.id))}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white transition-all"
                >
                  −
                </button>

                <span className="min-w-[40px] text-center font-semibold text-gray-800">
                  {data.quantity}
                </span>

                <button
                  onClick={() => dispatch(addToCart(data))}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white transition-all"
                >
                  +
                </button>
              </div>

              <p className="mt-1 text-sm text-gray-500">Quantity</p>
            </div>
          </div>

          {/* <div className="flex justify-between items-center mt-2">
            <div className="text-right">
              <p className="text-xs text-gray-500">Total</p>
              <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ${data.price * data.quantity}
              </p>
              <div className="flex items-center">
                <button onClick={() => dispatch(addToCart(data))} className="mx-2">+</button>
                <button onClick={() => dispatch(decreaseQuantity(data.id))} className="mx-2">-</button>
              </div>
              <p>Quantity: {data.quantity}</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CartBox;
