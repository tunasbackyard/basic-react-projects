import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";

function App() {
  const [reviewArray] = useState(data);
  const [index, setIndex] = useState(0);

  function handleIndex(fn) {
    let index = fn();
    index = index % reviewArray.length;
    if (index < 0) index = reviewArray.length - 1;
    setIndex(index);
  }
  const isActiveSlide = (reviewIx) => reviewIx === index;
  const isLastSlide = (reviewIx) => reviewIx === index - 1;
  const isEndOfTheSlide = (reviewIx) =>
    index === 0 && reviewIx === reviewArray.length - 1;

  return (
    <main>
      <div className="wrapper">
        <button
          className="btn"
          onClick={() => {
            handleIndex(() => index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <div className="slider">
          {reviewArray.map((review, reviewIx) => {
            const { id, image, name, title, quote } = review;
            let position = "nextSlide";

            if (isActiveSlide(reviewIx)) position = "activeSlide";

            if (isLastSlide(reviewIx) || isEndOfTheSlide(reviewIx))
              position = "lastSlide";

            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="review__img" />
                <h4 className="review__name">{name}</h4>
                <span className="review__title">{title}</span>
                <p className="review__text">{quote}</p>
              </article>
            );
          })}
        </div>
        <button
          className="btn"
          onClick={() => {
            handleIndex(() => index + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </main>
  );
}

export default App;
