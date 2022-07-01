import React from "react";

const Button = ({ icon, handler }) => {
  return <button onClick={handler}>{icon}</button>;
};

export default Button;
