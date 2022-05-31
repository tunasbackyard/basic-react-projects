import React from "react";

const ItemInfo = ({ text }) => {
  return (
    <div className="item__info">
      <i className="fa-solid fa-angles-right"></i>
      <p>{text}</p>
    </div>
  );
};

export default ItemInfo;
