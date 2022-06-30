import React from "react";
import { BsShopWindow } from "react-icons/bs";

const Empty = () => {
  return (
    <div className="container pt-24">
      <div className="flex flex-col mx-auto w-full h-full justify-center items-center ">
        <BsShopWindow className="text-5xl" />
        <span className="capitalize my-5 text-2xl font-semibold">empty</span>
      </div>
    </div>
  );
};

export default Empty;
