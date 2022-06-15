import React from "react";

const List = ({ array }) => {
  return (
    <ul className="list">
      {array.map((item) => {
        return (
          <li key={item.id} className="list__item">
            <span className="list__item__text">{item.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
