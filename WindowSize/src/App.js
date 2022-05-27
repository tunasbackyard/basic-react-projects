import React, { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function setSize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, [width, height]);

  return (
    <>
      <h1>Your Window Size</h1>
      <h4>
        {width} x {height}
      </h4>
    </>
  );
}

export default App;
