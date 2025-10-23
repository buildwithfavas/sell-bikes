import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Bike, ArrowRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import BikeIcon from "../assets/bike_icon.svg";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dummyUsers = [
    { userMail: "user1@gmail.com", password: "1234" },
    { userMail: "user2@gmail.com", password: "1234" },
    { userMail: "user3@gmail.com", password: "1234" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      window.alert("Please Enter the Email");
      return;
    } else if (password.trim() === "") {
      window.alert("Please Enter the Password");
      return;
    }

    const user = dummyUsers.find(
      (u) => u.userMail === email && u.password === password
    );
    if (user) {
      dispatch(login(email));
      setEmail("");
      setPassword("");
      setShowPassword(false);
      navigate("/home");
    } else {
      window.alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-100 to-blue-50 relative overflow-hidden">
      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
          <button
            onClick={() => history.back()}
            className="border border-blue-500 p-2 rounded-sm cursor-pointer hover:bg-blue-400 text-lg"
          >
            🔙
          </button>
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full shadow-lg">
                <img
                  src={BikeIcon}
                  alt="Bike Icon"
                  className="w-12 h-12 text-white"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Sign in to access your SellBike account
            </p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Sign In</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
