import React from "react";
import ItemInfo from "./ItemInfo";

const Item = () => {
  return (
    <article className="item">
      <h3 className="item__title"></h3>
      <span className="item__place"></span>
      <span className="item__date"></span>
      {/* <ItemInfo />  add dynamically*/}
      <button className="item__more-btn">More Info</button>
    </article>
  );
};

export default Item;
