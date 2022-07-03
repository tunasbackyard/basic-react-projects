import React from "react";

const Item = ({ id, image, name, title, quote, position }) => {
  return (
    <article className={position} key={id}>
      <img src={image} alt={name} className="review__img" />
      <h4 className="review__name">{name}</h4>
      <span className="review__title">{title}</span>
      <p className="review__text">{quote}</p>
    </article>
  );
};

export default Item;
