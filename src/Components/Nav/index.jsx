import React from "react";
import SearchBar from "../SearchBar";

function NavBar() {
  return (
    <div className="w-full flex flex-col">
      <SearchBar />
      <div className="w-full hidden lg:block pl-[8%] py-3 bg-[#121212]">
        <ul className="flex gap-[5%] text-base text-white capitalize ">
          <li>
            <a href="#" className="hover:text-[#FFD800]">
              top deals
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFD800]">
              Deals of the Day
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFD800]">
              men
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFD800]">
              Women
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFD800]">
              kids
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFD800]">
              new
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFD800]">
              Brands
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFD800]">
              Sports
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFD800]">
              Accessories
            </a>
          </li>
          <li className="text-[#FFD800]">
            <a href="#" className="hover:text-[#FFD800]">
              Sale
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
