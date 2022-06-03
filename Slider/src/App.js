import React from "react";

const App = () => {
  return (
    <main>
      <h3>Reviews</h3>
      <section className="wrapper">
        <button className="btn"></button>
        <article className="item container-vertical">
          <img className="item__img" src="" alt="" />
          <div className="container-horizontal">
            <div className="container-vertical">
              <h3 className="item__title"></h3>
              <h5 className="item__subtitle"></h5>
            </div>
            <p className="item__text"></p>
          </div>
        </article>
        <button className="btn"></button>
      </section>
    </main>
  );
};

export default App;
