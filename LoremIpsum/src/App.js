import React, { useState } from "react";
import data from "./data";
const App = () => {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
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
        if (index < numberOfParagraphs) return <p key={index}>{paragraph}</p>;
      })}
    </div>
  );
};

export default App;
