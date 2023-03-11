import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";

function MainSlider({ slides, hasBanner, banner }) {
  return (
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
      className="mySwiper w-full h-[100%]"
    >
      {slides.map((slide, key) => (
        <SwiperSlide
          key={key}
          className="bg-none md:bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${slide})`,
            width: "100%",
            height: "100%",
          }}
        >
          {hasBanner ? (
            banner === 1 ? (
              <div className="w-full h-full flex flex-col">
                <div className="block md:hidden bg-cover bg-center relative">
                  <img src={slide} alt="" className="w-full h-full" />
                </div>

                <div className="w-[100%] h-[100%] md:w-[50%] md:h-[100%] py-10 flex flex-col items-center justify-start bg-[#FFF2B9]">
                  <h1 className=" text-black text-2xl md:text-4xl font-extrabold uppercase ">
                    let's get active!
                  </h1>
                  <h1 className=" text-black text-5xl md:text-7xl font-extrabold uppercase ">
                    flat 20% off
                  </h1>
                  <h1 className=" text-black mt-3 text-2xl md:text-3xl font-semibold capitalize ">
                    equipment collection
                  </h1>
                  <span className="flex gap-2 mt-5 items-center">
                    <h1 className=" text-black text-2xl font-extrabold uppercase ">
                      use code:
                    </h1>
                    <h1 className=" text-black text-2xl font-extrabold uppercase underline">
                      active
                    </h1>
                  </span>
                  <button className="py-2 px-8 mt-7 text-white text-xl bg-[#2B3DF4] capitalize hover:bg-[#4857f9] rounded-lg">
                    shop now
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex">
                <div className=" w-full bg-cover bg-center relative">
                  <img src={slide} alt="" className="w-full h-full" />
                </div>

                <div className="absolute top-[5%] bottom-[5%] left-[5%] w-[35%] rounded-2xl shadow-lg shadow-black py-10 flex flex-col items-center justify-start bg-black">
                  <h1 className=" text-[#FAFC53] text-2xl md:text-4xl font-extrabold uppercase ">
                    sale just got bigger
                  </h1>
                  <h1 className=" text-white text-5xl md:text-7xl font-extrabold uppercase ">
                    40-90% off
                  </h1>
                  <h1 className=" text-black mt-3 text-2xl md:text-3xl font-semibold uppercase ">
                    everything
                  </h1>
                  <button className="py-2 px-8 text-white underline text-xl bg-transparent uppercase">
                    shop now
                  </button>
                  <p className="text-white text-xs cursor-pointer mt-10">
                    T&C's Apply
                  </p>
                </div>
              </div>
            )
          ) : (
            ""
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MainSlider;
