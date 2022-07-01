import React from "react";

const Button = ({ icon, handler }) => {
  return (
    <button className="mx-1" onClick={handler}>
      {icon}
    </button>
  );
};

export default Button;
