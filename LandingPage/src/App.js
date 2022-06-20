import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

import links from "./data";
import { Context } from "./Context";

const App = () => {
  return (
    <Context.Provider
      value={{
        links,
      }}
    >
      <Navbar />
      {/* <Sidebar /> */}
      <Hero />
    </Context.Provider>
  );
};

export default App;
