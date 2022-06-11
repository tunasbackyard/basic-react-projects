import React from "react";

const Item = ({ id, text, removeItem, getEditedItemID }) => {
  return (
    <li className="form__list__item">
      <span className="item__name">{text}</span>
      <div className="item__controls">
        <i
          className="item__icon icon-edit fa-regular fa-pen-to-square"
          title="edit"
          onClick={() => {
            getEditedItemID(id);
          }}
        ></i>
        <i
          className="item__icon icon-delete fa-regular fa-trash-can"
          title="delete"
          onClick={() => {
            removeItem(id);
          }}
        ></i>
      </div>
    </li>
  );
};

export default Item;
