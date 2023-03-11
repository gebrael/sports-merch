import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

function ProductSlider({ slides, title }) {
  return (
    <div className="w-full px-[5%] md:px-[10%] my-5">
      <h1 className="text-[#2D2F78] text-3xl font-bold capitalize">{title}</h1>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        style={{
          "--swiper-navigation-color": "#2D2F78",
          "--swiper-pagination-color": "#2D2F78",
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
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full "
      >
        {slides.results.map((slide, key) => (
          <SwiperSlide className="p-5" key={key}>
            <div className="flex flex-col items-center justify-center">
              <img src={slide.image} alt="" />
              <h4 className="text-lg font-semibold">{slide.name}</h4>
              <h1 className="uppercase text-[#BA0829] text-2xl font-bold">
                egp {slide.price_after_sale}{" "}
                <span className="text-[#BA0829] text-xs capitalize">
                  save {slide.price_before_sale - slide.price_after_sale}
                </span>
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
