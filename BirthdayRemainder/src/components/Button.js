import React from "react";
import { useGlobalContext } from "../context";

const Button = () => {
  const { reset } = useGlobalContext();
  return (
    <button
      className="my-5 px-5 py-1 bg-indigo-100 hover:bg-indigo-50 rounded shadow-sm"
      onClick={reset}
    >
      Clear All
    </button>
  );
};

export default Button;
