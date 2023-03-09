import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";

function MainSlider() {
  return (
    <div className="py-5">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper w-full h-[20vh] lg:h-[75vh]"
      >
        <SwiperSlide
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https:gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/Mask_Group_4.png)",
            width: "100%",
            height: "100%",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/bhc8023-1-1.jpg)",
            width: "100%",
            height: "100%",
          }}
        ></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainSlider;
