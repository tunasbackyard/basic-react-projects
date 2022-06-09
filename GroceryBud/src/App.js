import React from "react";
import Item from "./Item";

const App = () => {
  return (
    <main>
      <section className="wrapper">
        <form className="form">
          <h2 className="form__title">Grocery Bud</h2>
          <div className="form__input">
            <input
              className="form__input-field"
              type="text"
              name="item-input"
            />
            <button className="form__input-btn">Add</button>
          </div>
          <ul className="form__list">
            <Item />
          </ul>
        </form>
      </section>
    </main>
  );
};

export default App;
