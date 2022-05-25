import React from "react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="wrapper">
      <h1 className="number">{number}</h1>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          increase
        </button>
        <button
          className="btn"
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          decrease
        </button>
        <button
          className="btn"
          onClick={() => {
            setNumber(0);
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
