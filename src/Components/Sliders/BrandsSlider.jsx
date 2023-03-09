import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import "swiper/css/navigation";

function BrandsSlider() {
  return (
    <div className="py-5">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        loop={true}
        slidesPerView={6}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper  w-[80%] h-[20vh] lg:h-[25vh]"
      >
        <SwiperSlide>
          <div className="w-[140px] flex flex-col items-center justify-center gap-4 ">
            <div className="w-full h-[140px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src="https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/bhc8023-1-1.jpg"
              />
            </div>
            <h1>pla pla</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[140px] flex flex-col items-center justify-center gap-4 ">
            <div className="w-full h-[140px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src="https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/bhc8023-1-1.jpg"
              />
            </div>
            <h1>pla pla</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[140px] flex flex-col items-center justify-center gap-4 ">
            <div className="w-full h-[140px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src="https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/bhc8023-1-1.jpg"
              />
            </div>
            <h1>pla pla</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[140px] flex flex-col items-center justify-center gap-4 ">
            <div className="w-full h-[140px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src="https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/bhc8023-1-1.jpg"
              />
            </div>
            <h1>pla pla</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[140px] flex flex-col items-center justify-center gap-4 ">
            <div className="w-full h-[140px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src="https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/bhc8023-1-1.jpg"
              />
            </div>
            <h1>pla pla</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[140px] flex flex-col items-center justify-center gap-4 ">
            <div className="w-full h-[140px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src="https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/bhc8023-1-1.jpg"
              />
            </div>
            <h1>pla pla</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[140px] flex flex-col items-center justify-center gap-4 ">
            <div className="w-full h-[140px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src="https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/bhc8023-1-1.jpg"
              />
            </div>
            <h1>pla pla</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[140px] flex flex-col items-center justify-center gap-4 ">
            <div className="w-full h-[140px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src="https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/bhc8023-1-1.jpg"
              />
            </div>
            <h1>pla pla</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[140px] flex flex-col items-center justify-center gap-4 ">
            <div className="w-full h-[140px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src="https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/bhc8023-1-1.jpg"
              />
            </div>
            <h1>pla pla</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[140px] flex flex-col items-center justify-center gap-4 ">
            <div className="w-full h-[140px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src="https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/bhc8023-1-1.jpg"
              />
            </div>
            <h1>pla pla</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BrandsSlider;
