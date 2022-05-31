import React from "react";
import ItemInfo from "./ItemInfo";

const Item = () => {
  return (
    <article className="item">
      <h3 className="item__title">Front-End Engineer</h3>
      <span className="item__place">BIGDROP</span>
      <span className="item__date">May 2015 - December 2015</span>
      <button className="item__more-btn">More Info</button>
    </article>
  );
};

export default Item;
