import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Navbar from "../components/Navbar";
import BikeDetailsBox from "../components/BikeDetailsBox";
import Text from "../components/Text";
import { LandingDataSet } from "../datasets/Landing";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: false }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {LandingDataSet.map((data, idx) => (
          <SwiperSlide key={idx + Math.random()}>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.imageData})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5rem",
                padding: "10px",
              }}
            >
              <Text />
              <BikeDetailsBox
                type={data.type}
                mileage={data.mileage}
                year={data.year}
                transmission={data.transmission}
                engine={data.Engine}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Landing;
