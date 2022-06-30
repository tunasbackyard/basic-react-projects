import React from "react";
import "./index.css";

import List from "./components/List";
import Button from "./components/Button";

const App = () => {
  return (
    <section className="flex flex-col justify-center items-center w-screen h-screen bg-indigo-300 text-gray-800">
      <List />
      <Button />
    </section>
  );
};

export default App;
