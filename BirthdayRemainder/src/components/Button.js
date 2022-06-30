import React from "react";
import { useGlobalContext } from "../context";

const Button = () => {
  const { reset } = useGlobalContext();
  return (
    <button className="btn" onClick={reset}>
      Clear All
    </button>
  );
};

export default Button;
