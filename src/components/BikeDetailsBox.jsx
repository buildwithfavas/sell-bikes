import {
  FileText,
  Gauge,
  Fuel,
  Settings,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function BikeDetailsBox({
  type,
  mileage,
  year,
  transmission,
  engine,
}) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 w-80 backdrop-blur-sm bg-opacity-95">
      {/* Fuel Type */}
      <div className="flex items-center justify-between py-3 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-2 rounded-lg">
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-gray-600 text-sm">Fuel Type</span>
        </div>
        <span className="text-gray-900 font-semibold">{type}</span>
      </div>

      {/* Mileage */}
      <div className="flex items-center justify-between py-3 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Gauge className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-gray-600 text-sm">Mileage</span>
        </div>
        <span className="text-gray-900 font-semibold">{mileage} Miles</span>
      </div>

      {/* Engine */}
      <div className="flex items-center justify-between py-3 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Fuel className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-gray-600 text-sm">Engine</span>
        </div>
        <span className="text-gray-900 font-semibold">{engine}L</span>
      </div>

      {/* Transmission */}
      <div className="flex items-center justify-between py-3 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Settings className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-gray-600 text-sm">Transmission</span>
        </div>
        <span className="text-gray-900 font-semibold">{transmission}</span>
      </div>

      {/* Year */}
      <div className="flex items-center justify-between py-3 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-gray-600 text-sm">Year</span>
        </div>
        <span className="text-gray-900 font-semibold">{year}</span>
      </div>

      {/* Learn More Button */}
      <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        <span>Learn More</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
