import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import "swiper/css/navigation";

function BrandsSlider({ slides, backGround }) {
  return (
    <div className="flex flex-col px-5 lg:px-[10%] ">
      <div className="w-full pt-5 text-3xl font-bold text-[#2D2F78] capitalize ">
        <h1>Main Category</h1>
      </div>

      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
          "--swiper-navigation-sides-offset": "0px",
        }}
        loop={true}
        breakpoints={{
          375: {
            width: 375,
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full h-[20vh]  lg:h-[25vh]"
      >
        {slides.results.map((slide, key) => (
          <SwiperSlide key={key}>
            <div
              key={key}
              className="w-full h-full flex flex-col items-center justify-center gap-5"
            >
              <div
                className={`lg:w-[140px] lg:h-[140px] rounded-full overflow-hidden flex items-center justify-center ${
                  !backGround ? "bg-white" : "bg-[#2D2F7D]"
                }`}
              >
                <img src={slide.image} />
              </div>
              <h1 className="text-xl text black font-bold capitalize">
                {slide.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BrandsSlider;
