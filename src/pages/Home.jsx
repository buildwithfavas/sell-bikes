import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import BikeIcon from "../assets/bike_icon.svg";

const Home = () => {
  const { items } = useSelector((state) => state.items);
  // console.log(items);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <Navbar />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Featured Bikes
          </h1>
          <p className="text-gray-600">
            Discover your perfect ride from our collection
          </p>
        </div>

        {/* Cards Grid */}
        {items && items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {items.map((item, id) => (
              <ProductCard key={id} data={item} />
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <img
                src={BikeIcon}
                alt="Bike Icon"
                className="w-24 h-24 mx-auto"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              No Bikes Available
            </h2>
            <p className="text-gray-500">Check back later for new listings</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
