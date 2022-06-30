import React from "react";

const Item = ({ img, name, age }) => {
  return (
    <li className="item">
      <img src={img} alt="person-image" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </li>
  );
};

export default Item;
