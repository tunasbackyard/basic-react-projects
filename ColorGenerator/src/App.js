import React, { useState } from "react";
import Values from "values.js";
import Item from "./Item";

const App = () => {
  const [base, setBase] = useState(new Values("#8a2be2"));
  const [hex, setHex] = useState();
  const colorArray = base.all(10);
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    try {
      setBase(new Values(hex));
      setIsError(false);
    } catch {
      setIsError(true);
    }
  }

  return (
    <main>
      <section className="wrapper">
        <form className="input" onSubmit={handleSubmit}>
          <input
            className="input__field"
            type="text"
            name="color-code-input"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            style={isError ? { border: "2px solid red" } : null}
            placeholder={`#${base.hex}`}
          />
          <button className="input__btn">Generate</button>
        </form>
        <ul className="grid">
          {colorArray.map((color, index) => (
            <Item key={index} color={color} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
