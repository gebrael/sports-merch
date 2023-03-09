import React from "react";

function SideBar({ showSideBar, setShowSideBar }) {
  return (
    <div>
      {/* Background Layer */}
      <div
        className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-50 z-[5]"
        onClick={() => setShowSideBar(false)}
      />

      {/* SideBar Container */}
      <div
        className={`absolute top-0 bottom-0 left-0 z-10 bg-[#F7F7F7] flex flex-col 
        ${showSideBar ? "animate-openSideBar w-[80%]" : "w-0"}`}
      >
        {/* Closing BTN */}
        <div
          className=" flex items-center justify-start w-full p-6 text-2xl cursor-pointer "
          onClick={() => setShowSideBar(false)}
        >
          <i className="fa-solid fa-x animate-SideBarItems"></i>
        </div>

        {/* Brand Logo */}
        <div className=" w-full flex items-center gap-2 text-xl px-6 py-4 border-y border-slate-400">
          <i className="fa-solid fa-map animate-SideBarItems"></i>
          <a
            href="#"
            className="animate-SideBarItems"
            onClick={() => setShowSideBar(false)}
          >
            Store Locator
          </a>
        </div>

        {/* SideBar Links */}
        <div className="overflow-hidden  animate-SideBarlinks">
          <ul className="flex flex-col gap-4 p-6 text-lg text-[#121212] capitalize ">
            <li onClick={() => setShowSideBar(false)}>
              <a href="#">top deals</a>
            </li>
            <li onClick={() => setShowSideBar(false)}>
              <a href="#">Deals of the Day</a>
            </li>
            <li onClick={() => setShowSideBar(false)}>
              <a href="#">men</a>
            </li>
            <li onClick={() => setShowSideBar(false)}>
              <a href="#">Women</a>
            </li>
            <li onClick={() => setShowSideBar(false)}>
              <a href="#">kids</a>
            </li>
            <li onClick={() => setShowSideBar(false)}>
              <a href="#">new</a>
            </li>
            <li onClick={() => setShowSideBar(false)}>
              <a href="#">Brands</a>
            </li>
            <li onClick={() => setShowSideBar(false)}>
              <a href="#">Sports</a>
            </li>
            <li onClick={() => setShowSideBar(false)}>
              <a href="#">Accessories</a>
            </li>
            <li
              className="text-[#B88521]"
              onClick={() => setShowSideBar(false)}
            >
              <a href="#">Sale</a>
            </li>
            <li
              className="text-[#2D2F82] mt-12"
              onClick={() => setShowSideBar(false)}
            >
              <a href="#">العربية</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
