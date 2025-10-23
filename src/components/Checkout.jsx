import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-medium">Number of Items:</p>
          <p className="text-gray-900 font-semibold">{cartItems.length}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-medium">Total Price:</p>
          <p className="text-gray-900 font-semibold text-xl">
            ${totalPrice}.00
          </p>
        </div>
      </div>
      <Link to={"/checkout"}>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
