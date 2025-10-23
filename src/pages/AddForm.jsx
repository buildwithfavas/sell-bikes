import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  DollarSign,
  Gauge,
  Fuel,
  Settings,
  Image,
  Tag,
  FileText,
  Bike,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/Product/productSlice";
import { useNavigate } from "react-router-dom";
import noImage from "../assets/noImage.jpeg";
import BikeIcon from "../assets/bike_icon.svg";

export default function BikeListingForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = (data) => {
    const finalImage = imagePreview ? imagePreview : noImage;
    const formData = {
      ...data,
      image: finalImage,
    };
    //console.log("Form submitted:", formData);
    dispatch(addItems(formData));
    alert("Bike listing submitted successfully!");
    reset();
    setImagePreview(null);
    navigate("/home");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full">
                <img src={BikeIcon} alt="Bike Icon" className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Add Bike Listing
            </h1>
            <p className="text-gray-600">
              Fill in the details to list your bike.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Bike Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Bike Name <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Bike className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  {...register("bikeName", { required: "Bike name is required" })}
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.bikeName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="Yamaha R15 V4"
                />
              </div>
              {errors.bikeName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.bikeName.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  rows="4"
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="155cc Liquid-cooled, 6-speed, Sportbike with advanced aerodynamics and LED lights."
                />
              </div>
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Grid - Mileage, Fuel Type, Transmission */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Mileage */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mileage <span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Gauge className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register("mileage", {
                      required: "Mileage is required",
                    })}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.mileage ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    placeholder="50 Miles"
                  />
                </div>
                {errors.mileage && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.mileage.message}
                  </p>
                )}
              </div>

              {/* Fuel Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Fuel Type <span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Fuel className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    {...register("fuelType", {
                      required: "Fuel type is required",
                    })}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.fuelType ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none`}
                  >
                    <option value="">Select</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                {errors.fuelType && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fuelType.message}
                  </p>
                )}
              </div>

              {/* Transmission */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Transmission <span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Settings className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    {...register("transmission", {
                      required: "Transmission is required",
                    })}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.transmission ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none`}
                  >
                    <option value="">Select</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="CVT">CVT</option>
                  </select>
                </div>
                {errors.transmission && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.transmission.message}
                  </p>
                )}
              </div>
            </div>

            {/* Grid - Price and Price Tag */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price <span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    {...register("price", { required: "Price is required" })}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.price ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    placeholder="40,000"
                  />
                </div>
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.price.message}
                  </p>
                )}
              </div>

              {/* Price Tag */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price Tag <span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Tag className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    {...register("priceTag", {
                      required: "Price tag is required",
                    })}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.priceTag ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none`}
                  >
                    <option value="">Select</option>
                    <option value="Great Price">Great Price</option>
                    <option value="Best Deal">Best Deal</option>
                    <option value="Hot Offer">Hot Offer</option>
                    <option value="Limited Time">Limited Time</option>
                  </select>
                </div>
                {errors.priceTag && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.priceTag.message}
                  </p>
                )}
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Bike Image
              </label>
              <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors">
                <div className="space-y-2 text-center">
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="mx-auto h-48 w-auto rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setImagePreview(null)}
                        className="mt-2 text-sm text-red-600 hover:text-red-800"
                      >
                        Remove Image
                      </button>
                    </div>
                  ) : (
                    <>
                      <Image className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            {...register("image")}
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Submit Listing
              </button>
              <button
                type="button"
                onClick={() => {
                  reset();
                  setImagePreview(null);
                }}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
