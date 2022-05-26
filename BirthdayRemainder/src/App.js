import React, { useState } from "react";
import Item from "./Item";
import { data } from "./data";
import "./index.css";

function App() {
  const [array, setArray] = useState(data);

  const clearList = () => {
    setArray([]);
  };
  return (
    <section className="wrapper">
      <h3>{array.length} birthdays today</h3>
      {array.map((person) => {
        return <Item img={person.img} name={person.name} age={person.age} />;
      })}
      <button className="btn" onClick={clearList}>
        Clear All
      </button>
    </section>
  );
}

export default App;
