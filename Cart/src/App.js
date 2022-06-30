import React from "react";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Button from "./components/Button";
import { useGlobalContext } from "./context";

const App = () => {
  const { data } = useGlobalContext();
  return (
    <>
      <Navbar />
      <List />
      {data.length !== 0 && <Button />}
    </>
  );
};

export default App;
