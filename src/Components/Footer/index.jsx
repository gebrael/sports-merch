import React from "react";

function Footer() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center justify-start gap-[20%] px-[5%] md:px-[10%] py-10 md:py-20 border-y border-slate-400">
        <div className="w-30">
          <strong className="text-[#2E2E2E] text-2xl">Active Trending</strong>
          <ul className="text-[#2E2E2E] capitalize flex flex-col gap-4 mt-4">
            <li className="cursor-pointer">men</li>
            <li className="cursor-pointer">women</li>
            <li className="cursor-pointer">kids</li>
          </ul>
        </div>
        <div className="w-30">
          <strong className="text-[#2E2E2E] text-2xl">About Us</strong>
          <ul className="text-[#2E2E2E] capitalize flex flex-col gap-4 mt-4">
            <li className="cursor-pointer">about company</li>
            <li className="cursor-pointer">contact us</li>
            <li className="cursor-pointer">Our Branches</li>
          </ul>
        </div>
      </div>
      <div className="w-full py-3 text-center">
        <p>Copyright © 2022 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
