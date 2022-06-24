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
      <section className="w-10/12 mx-auto my-4">
        <form
          className="flex flex-row justify-start items-center pb-1 mb-1 border-b-2"
          onSubmit={handleSubmit}
        >
          <input
            className="py-1 px-4 font-bold outline-none"
            type="text"
            name="color-code-input"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            style={isError ? { border: "2px solid red" } : null}
            placeholder={`#${base.hex}`}
          />
          <button className="cursor-pointer px-2 rounded-sm text-white bg-blue-600 font-bold tracking-wide border-2 border-blue-600 ease-in duration-300 hover:text-blue-600 hover:bg-white">
            Generate
          </button>
        </form>
        <ul className="grid grid-cols-5">
          {colorArray.map((color, index) => (
            <Item key={index} color={color} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
