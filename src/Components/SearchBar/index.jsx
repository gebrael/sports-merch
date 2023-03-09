import React, { useState } from "react";
import SideBar from "../SideBar";

function SearchBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="w-full flex flex-col items-center ">
      {/* Sale Banner */}
      <div className="w-full bg-[#2D2F87] text-center text-white py-2">
        <p className="capitalize">white friday sales up to 70% off</p>
      </div>

      <div className="w-full flex justify-between lg:justify-center px-5 py-6 lg:gap-[10%]">
        {/* brand Logo */}
        <div className="hidden lg:flex items-center gap-2 text-xl text-[#6E6E6E] ">
          <i className="fa-solid fa-map"></i>
          <a href="">Store Locator </a>
        </div>

        {/* mobile Menu Icon */}
        <div
          className="flex items-center lg:hidden text-2xl text-[#6E6E6E] cursor-pointer"
          onClick={() => setShowSideBar(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* Search */}
        <div className="hidden md:block w-[50%] relative ">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-6 py-3 rounded-2xl border-2 border-[#6E6E6E] text-lg font-semibold"
          />
          <i className="fa-solid fa-magnifying-glass absolute top-5 right-7 text-[#6E6E6E]"></i>
        </div>

        {/* Controllers */}
        <div className="flex justify-between lg:justify-center items-center gap-5 text-[#2D2F87] text-2xl font">
          <a href="" className="hidden lg:block">
            العربية
          </a>

          <a href="">
            <i className="fa-solid fa-user text-2xl text-[#6E6E6E]"></i>
          </a>
          <div className="relative">
            <a href="">
              <i className="fa-solid fa-cart-shopping text-2xl text-[#6E6E6E]"></i>
              <div className="w-5 h-5 flex items-center justify-center text-xs text-white bg-[#2D2F87] rounded-full border-2 border-white absolute top-[-10px] right-[-6px]">
                <p className="m-0 p-0">2</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Search Input in Mobile */}
      <div className="block md:hidden w-full px-5 relative ">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-6 py-3 rounded-2xl border-2 border-[#6E6E6E] text-lg font-semibold"
        />
        <i className="fa-solid fa-magnifying-glass absolute top-5 right-10 text-[#6E6E6E]"></i>
      </div>

      {/* Side Bar */}
      {showSideBar && (
        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      )}
    </div>
  );
}

export default SearchBar;
