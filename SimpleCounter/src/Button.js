import React from "react";

function Button({ text, handler }) {
  return (
    <button className="btn" onClick={handler}>
      {text}
    </button>
  );
}

export default Button;
