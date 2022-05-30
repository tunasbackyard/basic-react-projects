import React from "react";

const Item = () => {
  return (
    <article className="list__item">
      <div className="item__img-container">
        <img src="" alt="food-image" />
      </div>
      <aside className="item__meta">
        <div>
          <h3 className="item__title"></h3>
          <span className="item__price"></span>
        </div>
        <p className="item__info"></p>
      </aside>
    </article>
  );
};

export default Item;
