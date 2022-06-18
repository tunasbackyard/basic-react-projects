import React from "react";
import { useContext } from "react";
import { Context } from "../App";

const List = () => {
  const { people } = useContext(Context);
  return (
    <ul className="list">
      {people.map((item) => {
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
