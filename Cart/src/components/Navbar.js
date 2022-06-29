import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="container flex justify-evenly py-4 bg-pink-400 text-2xl shadow-md">
      <h1 className="text-lime-100">
        My<span className="font-bold">Shop</span>
      </h1>
      <div className="w-fit relative text-gray-700">
        <HiShoppingCart className="text-3xl" />
        <span className="flex justify-center items-center absolute -top-3 left-full text-base h-6 w-6 bg-slate-200 rounded-3xl shadow-sm">
          0
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
