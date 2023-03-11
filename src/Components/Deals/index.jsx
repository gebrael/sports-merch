import React from "react";

function Deals() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-10 md:px-[10%] px-[5%] py-16">
      {/* CARD 1 */}
      <div className="flex gap-3 border border-slate-400 rounded-lg md:w-[40%]">
        <img src="./deal-2.png" alt="" className="w-[40%] md:w-[50%]" />
        <div className="flex flex-col items-start justify-start gap-3 p-4 ">
          <img src="./crocs.png" alt="crocs" className="w-[40%] md:w-[40%]" />
          <h1 className="text-2xl md:text-5xl font-extrabold">35-70% off</h1>
          <button className="text-2xl text-slate-500 font-bold bg-white">
            shop now
          </button>
          <p className="text-xs text-slate-400">{"t&c's apply"}</p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="flex gap-3 border border-slate-400 rounded-lg md:w-[40%]">
        <img src="./deal-1.png" alt="" className="w-[40%] md:w-[50%]" />
        <div className="flex flex-col items-start justify-start gap-3 p-4 ">
          <img src="./adidas.png" alt="crocs" className="w-[20%] md:w-[30%]" />
          <h1 className="text-2xl md:text-5xl font-extrabold">35-70% off</h1>
          <button className="text-2xl text-slate-500 font-bold bg-white">
            shop now
          </button>
          <p className="text-xs text-slate-400">{"t&c's apply"}</p>
        </div>
      </div>
    </div>
  );
}

export default Deals;
