import React from "react";

function Tour({ id, name, info, image, price }) {
  return (
    <article className="tour">
      <img className="tour__img" src={image} alt={name} />
      <div>
        <h1 className="tour__title">{name}</h1>
        <h4 className="tour__price">${price}</h4>
      </div>
      <p className="tour__info">{info}</p>
    </article>
  );
}

export default Tour;
