import React from "react";
import { useGlobalContext } from "../context";

const Button = ({ text, order }) => {
  const { setCurrentIx } = useGlobalContext();
  return (
    <div
      className="tab"
      onClick={() => {
        setCurrentIx(order - 1);
      }}
    >
      {text}
    </div>
  );
};

export default Button;
