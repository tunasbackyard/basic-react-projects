import React from "react";
import { useState } from "react";
import Button from "./Button";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="wrapper">
      <h1 className="number">{number}</h1>
      <div className="btn-container">
        <Button
          handler={() => {
            setNumber(number + 1);
          }}
          text={"increase"}
        />
        <Button
          handler={() => {
            setNumber(number - 1);
          }}
          text={"decrease"}
        />
        <Button
          handler={() => {
            setNumber(0);
          }}
          text={"reset"}
        />
      </div>
    </div>
  );
}

export default App;
