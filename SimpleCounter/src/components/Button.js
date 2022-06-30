import React from "react";

const Button = ({ text, handler }) => {
  return (
    <button className="btn" onClick={handler}>
      {text}
    </button>
  );
};

export default Button;
