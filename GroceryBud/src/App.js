import React, { useEffect, useState } from "react";
import Item from "./Item";

const App = () => {
  const [itemArray, setItemArray] = useState([]);
  const [text, setText] = useState();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
    return clearTimeout;
  }, [isAdded]);

  return (
    <main>
      <section className="wrapper">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2 className="form__title">Grocery Bud</h2>
          <div className="form__input">
            <input
              className="form__input-field"
              type="text"
              name="item-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="form__input-btn"
              onClick={() => {
                const id = new Date().valueOf();
                itemArray.push({ id, text });
                setIsAdded(true);
                setText("");
              }}
            >
              Add
            </button>
          </div>
          {isAdded && (
            <div className="form__message">Item successfully added</div>
          )}
          <ul className="form__list">
            {itemArray.map((item) => (
              <Item
                key={item.id}
                {...item}
                removeItem={(id) => {
                  setItemArray(itemArray.filter((item) => item.id !== id));
                }}
              />
            ))}
          </ul>
        </form>
      </section>
    </main>
  );
};

export default App;