import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { markAsSold } from "../redux/Product/productSlice";
import { clearCart } from "../redux/Cart/cartSlice";

const CheckOutPage = () => {
  const { totalPrice, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [confirm, setConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    //console.log(formData);
    setFormData({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    setConfirm(true);
    cartItems.forEach((cart) => dispatch(markAsSold(cart.id)));
    dispatch(clearCart());
    //console.log(cartItems);
  };

  let shipping = 8;
  let tax = 5;

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {!confirm ? (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Form Section */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {/* Payment Information */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                      Payment Information
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          maxLength="16"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            maxLength="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            maxLength="3"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                  >
                    Confirm Payment
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Order Summary
                  </h2>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>${totalPrice}.00</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span>${shipping}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Tax</span>
                      <span>${tax}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between text-lg font-bold text-gray-900">
                        <span>Total</span>
                        <span>${totalPrice + shipping + tax}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      🔒 Your payment information is secure and encrypted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="text-center my-auto font-bold text-4xl text-orange-600">
              No items in the cart
            </h1>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-96">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <div className="mb-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Payment Confirmed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your order has been successfully placed.
            </p>

            <button
              onClick={handleGoHome}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
