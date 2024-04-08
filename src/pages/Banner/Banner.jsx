import SliderOne from "./SliderOne";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import SliderTwo from "./SliderTwo";
import SliderThree from "./SliderThree";

const Banner = () => {
  return (
    <div>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderOne></SliderOne>
        </SwiperSlide>
        <SwiperSlide>
          <SliderTwo></SliderTwo>
        </SwiperSlide>
        <SwiperSlide>
          <SliderThree></SliderThree>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
