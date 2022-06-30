import React from "react";
import Container from "./components/Container";
import Viewer from "./components/Viewer";

const App = () => {
  return (
    <section className="wrapper">
      <Viewer />
      <Container />
    </section>
  );
};

export default App;
