import React from "react";
import data from "./data";

const App = () => {
  const review = data[0];
  return (
    <main>
      <h1>Reviews</h1>
      <section className="wrapper">
        <button className="btn">
          <i class="fa-solid fa-angle-up"></i>
        </button>
        <article className="item container-vertical">
          <img className="item__img" src={review.image} alt="" />
          <div className="container-horizontal">
            <div className="container-vertical">
              <h3 className="item__title">{review.name}</h3>
              <h5 className="item__subtitle">{review.title}</h5>
            </div>
            <p className="item__text">" {review.quote} "</p>
          </div>
        </article>
        <button className="btn">
          <i class="fa-solid fa-angle-down"></i>
        </button>
      </section>
    </main>
  );
};

export default App;
