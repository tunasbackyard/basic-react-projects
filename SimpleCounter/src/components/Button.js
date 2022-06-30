import React from "react";

const Button = ({ text, handler }) => {
  return (
    <button
      className="flex mx-2 px-10 py-1 bg-gray-500 rounded-sm capitalize hover:bg-gray-400"
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
