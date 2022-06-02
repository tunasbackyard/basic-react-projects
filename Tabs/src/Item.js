import React from "react";

const Item = ({ current }) => {
  return (
    <div className="item">
      <div>
        <h3 className="item__title">{current?.title ?? "undefined"}</h3>
        <span className="item__date">{current?.dates ?? "undefined"}</span>
      </div>
      <span className="item__company">{current?.company ?? "undefined"}</span>
      <ul className="item__list">
        <li>
          <p className="item__text">{current?.duties[0] ?? "undefined"}</p>
        </li>
        <li>
          <p className="item__text">{current?.duties[1] ?? "undefined"}</p>
        </li>
        <li>
          <p className="item__text">{current?.duties[2] ?? "undefined"}</p>
        </li>
      </ul>
    </div>
  );
};

export default Item;
