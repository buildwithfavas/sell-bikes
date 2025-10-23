import {
  Menu,
  X,
  ShoppingCart,
  ChevronDown,
  Phone,
  UserIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleLogOut = () => {
    dispatch(logOut());
    navigate("/login");
  };

  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.44 9.03L18 6h-2v2h1.6l.94 2.03c-.32-.02-.63-.03-.94-.03-2.18 0-4.1.88-5.5 2.3V10H9v4H6c-1.1 0-2 .9-2 2v2H2v2h4v-4h3v4h2v-2.26c1.39 1.42 3.32 2.3 5.5 2.3 2.48 0 4.65-1.14 6.08-2.91l1.42 1.42 1.41-1.41-1.47-1.47c.31-.63.56-1.31.72-2.03l1.32.32.5-1.97-3.64-.9zM17 18c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
              </svg>
              <span className="ml-2 text-xl font-bold">Sell Bikes</span>
            </div>
            <div className="hidden md:flex items-center ml-4 text-sm text-slate-300">
              <Phone className="w-4 h-4 mr-1" />
              <span>+91 123 456 789</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-slate-300 transition">
              Home
            </a>

            <div className="relative group">
              <button className="flex items-center text-white hover:text-slate-300 transition">
                Listings <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-white hover:text-slate-300 transition">
                Blog <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-white hover:text-slate-300 transition">
                Pages <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>

            <a href="#" className="text-white hover:text-slate-300 transition">
              About
            </a>
            <a href="#" className="text-white hover:text-slate-300 transition">
              Contact
            </a>
            {user ? (
              <div className="flex items-center justify-between gap-3">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded transition flex items-center justify-between"
                  onClick={HandleLogOut}
                >
                  <UserIcon className="w-4 h-4 mr-1" />
                  log out
                </button>
                <Link to={"/addList"}>
                  <button className=" cursor-pointer bg-green-400 hover:bg-green-700 text-white px-5 py-2 rounded transition flex items-center justify-between">
                    add ➕
                  </button>
                </Link>
                <Link to={"/addToCart"}>
                  <div className="relative flex items-center gap-2">
                    <p className="font-bold text-white flex items-center gap-1">
                      Cart <ShoppingCart className="w-5 h-5" />
                    </p>
                    {cartItems.length > 0 && (
                      <span className="absolute -top-2 -right-2 p-1 w-4 h-4 text-xs text-white rounded-full bg-blue-400 flex items-center justify-center">
                        {cartItems.length}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded transition flex items-center justify-between">
                  <UserIcon className="w-4 h-4 mr-1" />
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
