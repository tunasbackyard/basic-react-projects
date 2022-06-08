import React, { useEffect, useState } from "react";

const Item = ({ color }) => {
  const colorRgb = `rgb(${color.rgb.join(",")})`;
  const foregroundColor = color.type === "shade" ? "azure" : "black";
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 700);
    return () => clearTimeout();
  }, [isCopied]);
  return (
    <li
      className="grid__item"
      style={{ backgroundColor: colorRgb, color: foregroundColor }}
      onClick={() => {
        navigator.clipboard.writeText(`#${color.hex}`);
        setIsCopied(true);
      }}
    >
      <span className="item__text">%{color.weight}</span>
      <span id="hex-code" className="item__text">
        #{color.hex}
      </span>
      {isCopied && <span className="item__copy-msg">Copied to clipboard</span>}
    </li>
  );
};

export default Item;
