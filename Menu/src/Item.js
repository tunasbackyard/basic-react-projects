import React from "react";

const Item = ({ id, title, category, price, img, desc }) => {
  return (
    <article className="list__item">
      <div className="item__img-container">
        <img src={img} alt="food-image" />
      </div>
      <aside className="item__meta">
        <div>
          <h3 className="item__title">{title}</h3>
          <span className="item__price">${price}</span>
        </div>
        <p className="item__info">{desc}</p>
      </aside>
    </article>
  );
};

export default Item;
