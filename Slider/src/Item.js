import React from "react";

const Item = ({ image, name, title, quote }) => {
  return (
    <article className="item container-vertical">
      <img className="item__img" src={image} alt="" />
      <div className="container-horizontal">
        <div className="container-vertical">
          <h3 className="item__title">{name}</h3>
          <h5 className="item__subtitle">{title}</h5>
        </div>
        <p className="item__text">" {quote} "</p>
      </div>
    </article>
  );
};

export default Item;
