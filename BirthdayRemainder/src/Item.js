import React from "react";

function Item({ img, name, age }) {
  return (
    <article className="item">
      <img src={img} alt="person-image" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
}

export default Item;
