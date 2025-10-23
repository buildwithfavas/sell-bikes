import { useDispatch } from "react-redux";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import { removeFromCart } from "../redux/Cart/cartSlice";

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
            <div className="text-right">
              <p className="text-xs text-gray-500">Total</p>
              <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ${data.price * data.quantity}
              </p>
              <p>Quantity: {data.quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
