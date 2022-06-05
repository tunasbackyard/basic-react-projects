import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";

function App() {
  const [reviewArray, setReviewArray] = useState(data);
  const [index, setIndex] = useState(0);

  // useEffect(() => {}, [index]);

  function handleIndex(fn) {
    let index = fn();
    index = index % reviewArray.length;
    if (index < 0) index = reviewArray.length - 1;
    setIndex(index);
  }

  return (
    <section className="section">
      <div className="title">
        <h2>reviews</h2>
      </div>
      <div className="section-center">
        <button
          className="prev"
          onClick={() => {
            handleIndex(() => index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        {reviewArray.map((review, reviewIx) => {
          const { id, image, name, title, quote } = review;
          let position = "nextSlide";
          if (reviewIx === index) {
            position = "activeSlide";
          }
          if (
            reviewIx === index - 1 ||
            (index === 0 && reviewIx === reviewArray.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button
          className="next"
          onClick={() => {
            handleIndex(() => index + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
