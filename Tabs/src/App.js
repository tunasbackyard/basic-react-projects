import React from "react";
import "./index.css";
import { useGlobalContext } from "./context";

import List from "./components/List";

const App = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) return <div>Loading</div>;
  return (
    <main>
      <h1>Experience</h1>
      <List />
    </main>
  );
};

export default App;
