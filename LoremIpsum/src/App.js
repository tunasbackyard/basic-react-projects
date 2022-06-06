import React, { useState } from "react";
import data from "./data";
import "./index.css";
const App = () => {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState();
  return (
    <div className="wrapper">
      <form
        className="input-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="input"
          type="number"
          id="number-input"
          name="number-input"
          placeholder="min: 1 max: 9"
          value={numberOfParagraphs}
          onChange={(e) => {
            setNumberOfParagraphs(e.target.value < 0 ? 1 : e.target.value);
          }}
        />
      </form>
      {data.map((paragraph, index) => {
        if (index < numberOfParagraphs)
          return (
            <div className="text-container">
              <h3>{index + 1}</h3>
              <p className="text" key={index}>
                {paragraph}
              </p>
            </div>
          );
      })}
    </div>
  );
};

export default App;
