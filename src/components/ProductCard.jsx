import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/Product/productSlice";
import { addToCart, removeFromCart } from "../redux/Cart/cartSlice";
import {
  Gauge,
  Fuel,
  Settings,
  ArrowRight,
  DeleteIcon,
  SquarePen,
} from "lucide-react";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const HandleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete it permanently");
    if (!confirm) {
      return;
    }
    dispatch(removeItem(id));
    dispatch(removeFromCart(id));
  };

  const HandleAdd = () => {
    dispatch(addToCart(data));
    window.alert("Item added to cart successfully");
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={data.image}
          alt={data.bikeName}
          className="w-full h-full object-cover"
        />

        {/* Price Tag Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {data.priceTag}
          </span>
        </div>

        {/* Bookmark Icon */}
        <button
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          onClick={() => HandleDelete(data.id)}
          title="delete"
        >
          <DeleteIcon className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Bike Name */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-between">
          <span>{data.bikeName}</span>
          <SquarePen onClick={() => navigate(`/edit/${data.id}`)} />
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6">{data.description}</p>

        {/* Specifications Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Mileage */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-50 p-3 rounded-lg mb-2">
              <Gauge className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-gray-900 font-semibold text-sm">
              {data.mileage}
            </span>
            <span className="text-green-900 font-semibold text-sm mx-auto">
              seller:{user}
            </span>
          </div>

          {/* Fuel Type */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-50 p-3 rounded-lg mb-2">
              <Fuel className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-gray-900 font-semibold text-sm">
              {data.fuelType}
            </span>
          </div>

          {/* Transmission */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-50 p-3 rounded-lg mb-2">
              <Settings className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-gray-900 font-semibold text-sm">
              {data.transmission}
            </span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <span className="text-3xl font-bold text-gray-900">
              ${data.price}
            </span>
            {data.sold ? (
              <p className="text-red-900 font-bold italic text-shadow-2xs">
                Product Unavailable
              </p>
            ) : (
              <button
                className="flex items-center space-x-2 border border-black rounded-sm cursor-pointer  p-0.5 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                onClick={() => HandleAdd(data.id)}
              >
                <span className="font-normal text-purple-600 ">Add 🛒</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
