import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [current, setCurrent] = useState(data[0]);
  const [index, setIndex] = useState(0);

  function handleIndex(fn) {
    let localIx = fn();
    localIx = localIx % data.length;
    localIx = localIx < 0 ? data.length - 1 : localIx;
    setCurrent(data[localIx]);
    setIndex(localIx);
  }

  return (
    <main>
      <h1>Reviews</h1>
      <section className="wrapper">
        <button
          className="btn"
          onClick={() => {
            handleIndex(() => index + 1);
          }}
        >
          <i className="fa-solid fa-angle-up"></i>
        </button>
        <article className="item container-vertical">
          <img className="item__img" src={current.image} alt="" />
          <div className="container-horizontal">
            <div className="container-vertical">
              <h3 className="item__title">{current.name}</h3>
              <h5 className="item__subtitle">{current.title}</h5>
            </div>
            <p className="item__text">" {current.quote} "</p>
          </div>
        </article>
        <button
          className="btn"
          onClick={() => {
            handleIndex(() => index - 1);
          }}
        >
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </section>
    </main>
  );
};

export default App;
