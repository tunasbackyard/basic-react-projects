import React from "react";
import { useGlobalContext } from "../context";

const Button = () => {
  const { clearChart } = useGlobalContext();
  return (
    <button
      className="flex mx-auto mb-4 bg-red-500 text-white px-10 py-2 rounded-sm shadow-md"
      onClick={clearChart}
    >
      Clear Chart
    </button>
  );
};

export default Button;
