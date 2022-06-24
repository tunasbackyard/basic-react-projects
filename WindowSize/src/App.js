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
    <main className="flex flex-col justify-center  items-center px-20 h-screen text-gray-800 bg-blue-200">
      <h1 className="text-4xl font-bold ">Your Window Size</h1>
      <h4 className="mt-16 px-10 py-5 bg-blue-100 text-2xl rounded-xl">
        {width} x {height}
      </h4>
    </main>
  );
}

export default App;
