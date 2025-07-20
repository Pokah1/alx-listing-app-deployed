import React from "react";
import Image from "next/image";
import { Svgs } from "@/constants";
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-[#34967C]">
          <Image src="/assets/alx-logo.svg" alt="logo" width={60} height={50} />
        </div>

        {/* Search Bar */}
       <div className="flex flex-1 max-w-3xl items-center border border-gray-200 rounded-full overflow-hidden shadow-sm bg-white">
  <input
    type="text"
    placeholder="Location"
    className="flex-1 px-4 py-2 focus:outline-none text-sm border-r border-gray-200"
  />
  <input
    type="text"
    placeholder="Check in"
    className="px-4 py-2 focus:outline-none text-sm border-r border-gray-200"
  />
  <input
    type="text"
    placeholder="Check out"
    className="px-4 py-2 focus:outline-none text-sm border-r border-gray-200"
  />
  <input
    type="text"
    placeholder="People"
    className="px-4 py-2 focus:outline-none text-sm"
  />
  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
    </svg>
  </button>
</div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <button className="text-[#34967C] font-medium hover:underline">Sign in</button>
          <button className="bg-[#34967C] text-white px-4 py-2 rounded-md hover:bg-[#2d7e6a]">
            Sign up
          </button>
        </div>
      </div>

    <div className="border-t">
  <div className="max-w-7xl mx-auto px-4 py-3 flex overflow-x-auto gap-6 scrollbar-hide">
    {Svgs.map(({ label, icon }) => (
      <div
        key={label}
        className="flex flex-col items-center gap-1 min-w-[56px] sm:min-w-[72px] text-xs sm:text-sm text-gray-600 hover:text-[#34967C] cursor-pointer"
      >
        <div className="block">
          <Image src={icon} alt={label} width={20} height={20} />
        </div>

        <span className="truncate max-w-full leading-none">{label}</span>
      </div>
    ))}
  </div>
</div>


    </header>
  );
};

export default Header;
