import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <article className="tour">
      <img className="tour__img" src={image} alt={name} />
      <div>
        <h1 className="tour__title">{name}</h1>
        <h4 className="tour__price">${price}</h4>
      </div>
      <p className="tour__info">
        {isClicked ? info : info.substring(0, 200)}
        <button
          className="more__btn"
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          {isClicked ? "Show Less" : "Read More"}
        </button>
      </p>
      <button
        className="tour__btn"
        onClick={() => {
          removeTour(id);
        }}
      >
        Not interesting
      </button>
    </article>
  );
}

export default Tour;
