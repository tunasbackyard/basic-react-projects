import React, { useState } from "react";
import "./index.css";

import Item from "./Item";
import data from "./data";

function App() {
  const [array, setArray] = useState(data);

  const clearList = () => {
    setArray([]);
  };
  return (
    <section className="wrapper">
      <h3>{array.length} birthdays today</h3>
      {array.map((person) => {
        return (
          <Item
            key={person.id}
            name={person.name}
            age={person.age}
            img={person.img}
          />
        );
      })}
      <button className="btn" onClick={clearList}>
        Clear All
      </button>
    </section>
  );
}

export default App;
