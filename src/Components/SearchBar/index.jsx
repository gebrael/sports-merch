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
          <div className="relative group">
            <a href="#">
              <i className="fa-solid fa-cart-shopping text-2xl text-[#6E6E6E]"></i>
              <div className="w-5 h-5 flex items-center justify-center text-xs text-white bg-[#2D2F87] rounded-full border-2 border-white absolute top-[-10px] right-[-6px]">
                <p className="m-0 p-0">2</p>
              </div>
            </a>
            {/* CART ITEMS */}
            <div className="cart-menu w-[380px] md:w-[500px] py-5 group-hover:block hidden absolute rounded-xl top-[50px] right-[-15px] bg-white z-10 p-2 shadow-lg">
              <p className="text-black">Shopping cart (2)</p>
              {/* product  */}
              <div className="flex p-2 relative">
                <img
                  src="https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/items/Screenshot_2022-11-21_at_8.34.48_PM.png?fbclid=IwAR0rtSehea3LB7SqSc9J96SYLKEM7ujduPkPCJlaT40drMHcBpkm34v6vcc"
                  alt="product-img"
                />
                <div className="product-data px-2">
                  <p className="text-black">Nike jordan kids</p>
                  <p className="text-black">
                    <span className="text-gray-400 text-lg">Price : </span>{" "}
                    <span className="text-[#2d2f87] text-lg">1500 EGP</span>
                  </p>
                  <p className="text-black">
                    <span className="text-gray-400 text-lg">Size : </span>{" "}
                    <span className=" text-lg">XL</span>
                  </p>
                  <p className="text-black">
                    <span className="text-gray-400 text-lg">Color : </span>{" "}
                    <span className=" text-lg">White</span>
                  </p>
                  <div className="flex justify-between rounded-lg text-black border-solid border-2 border-gray-100 w-[120px] px-3 m-auto mt-2">
                    <span className="text-gray-300">-</span>
                    <span>1</span>
                    <span className="text-gray-300">+</span>
                  </div>
                </div>
                <i className="fa-solid fa-trash absolute top-2 right-2 text-gray-300 hover:text-black"></i>
              </div>
              <hr />
              {/* product  */}
              <div className="flex p-2 relative">
                <img
                  src="https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/items/Screenshot_2022-11-21_at_8.35.00_PM.png?fbclid=IwAR1pgxF-WQqLq9YsX88ljCPVQlKG8HwBWU-s9L_CxcLqYapOxwC1HHOFS_A"
                  alt="product-img"
                />
                <div className="product-data px-2">
                  <p className="text-black">Nike jordan kids</p>
                  <p className="text-black">
                    <span className="text-gray-400 text-lg">Price : </span>{" "}
                    <span className="text-[#2d2f87] text-lg">1500 EGP</span>
                  </p>
                  <p className="text-black">
                    <span className="text-gray-400 text-lg">Size : </span>{" "}
                    <span className=" text-lg">XL</span>
                  </p>
                  <p className="text-black">
                    <span className="text-gray-400 text-lg">Color : </span>{" "}
                    <span className=" text-lg">White</span>
                  </p>
                  <div className="flex justify-between rounded-lg text-black border-solid border-2 border-gray-100 w-[120px] px-3 m-auto mt-2">
                    <span className="text-gray-300">-</span>
                    <span>1</span>
                    <span className="text-gray-300">+</span>
                  </div>
                </div>
                <i className="fa-solid fa-trash absolute top-2 right-2 text-gray-300 hover:text-black"></i>
              </div>
              {/* bottom buttons */}
              <div className="absolute w-full h-1/3 bottom-5 left-0 bg-white rounded-b-lg flex flex-col">
                <div className="flex justify-between p-2">
                  <p>Total Cart Amount</p>
                  <p>EGP 5500</p>
                </div>
                <button className="bg-[#2D2F87] rounded-full text-white w-2/3 m-auto text-xl p-1">
                  Complete The Purchase
                </button>
                <button className="text-black rounded-full w-2/3 m-auto text-xl border-solid border-2 border-black p-1">
                  View Cart
                </button>
              </div>
            </div>
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
