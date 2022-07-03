import React from "react";
import { useGlobalContext } from "../context";

const Button = ({ clickHandler, icon }) => {
  const { handleIndex } = useGlobalContext();
  return (
    <button
      className="cursor-pointer text-3xl hover:text-gray-500 z-10"
      onClick={() => {
        handleIndex(clickHandler);
      }}
    >
      {icon}
    </button>
  );
};

export default Button;
