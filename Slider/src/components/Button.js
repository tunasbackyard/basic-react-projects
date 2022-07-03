import React from "react";
import { useGlobalContext } from "../context";

const Button = ({ clickHandler, icon }) => {
  const { handleIndex } = useGlobalContext();
  return (
    <button
      className="btn"
      onClick={() => {
        handleIndex(clickHandler);
      }}
    >
      {icon}
    </button>
  );
};

export default Button;
