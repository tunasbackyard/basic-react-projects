import React from "react";

const Item = ({ img, name, age }) => {
  return (
    <li className="flex my-4">
      <img className="w-12" src={img} alt="person-image" />
      <div className="mx-5">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-xs">{age} years</p>
      </div>
    </li>
  );
};

export default Item;
