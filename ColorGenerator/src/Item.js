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
      className="flex flex-col px-4 py-4 cursor-pointer w-60 h-32 text-black font-bold text-sm uppercase tracking-wider"
      style={{ backgroundColor: colorRgb, color: foregroundColor }}
      onClick={() => {
        navigator.clipboard.writeText(`#${color.hex}`);
        setIsCopied(true);
      }}
    >
      <span>%{color.weight}</span>
      <span id="hex-code">#{color.hex}</span>
      {isCopied && (
        <span className="w-full my-8 px-1 py-1 text-black bg-gray-100 text-center capitalize font-normal text-xs rounded-sm shadow-md">
          Copied to clipboard
        </span>
      )}
    </li>
  );
};

export default Item;
