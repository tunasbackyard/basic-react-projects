import React from "react";
import Container from "./components/Container";
import Viewer from "./components/Viewer";

const App = () => {
  return (
    <section className="flex flex-col w-screen h-screen justify-center items-center text-lime-50 bg-slate-800">
      <Viewer />
      <Container />
    </section>
  );
};

export default App;
