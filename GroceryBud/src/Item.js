import React from "react";

const Item = () => {
  return (
    <li className="form__list__item">
      <span className="item__name">Egg</span>
      <div className="item__controls">
        <i
          className="item__icon icon-edit fa-regular fa-pen-to-square"
          title="edit"
        ></i>
        <i
          className="item__icon icon-delete fa-regular fa-trash-can"
          title="delete"
        ></i>
      </div>
    </li>
  );
};

export default Item;
