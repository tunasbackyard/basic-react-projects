import React from "react";
import { useGlobalContext } from "../context";

const Button = ({ text, order }) => {
  const { setCurrentIx } = useGlobalContext();
  return (
    <div
      className="flex justify-center items-center bg-slate-900 w-full h-fit px-5 py-2 rounded-md cursor-pointer hover:bg-slate-800"
      onClick={() => {
        setCurrentIx(order - 1);
      }}
    >
      {text}
    </div>
  );
};

export default Button;
