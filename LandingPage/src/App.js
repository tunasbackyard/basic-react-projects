import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Submenu from "./components/Submenu";
import { useGlobalContext } from "./Context";

const App = () => {
  const { sublinks, currentLinkIndex } = useGlobalContext();

  return (
    <>
      <Navbar />
      <Hero />
      {sublinks.map(({ links }, index) => {
        console.log(index, currentLinkIndex);
        if (currentLinkIndex === index)
          return <Submenu key={index} links={links} />;
      })}
    </>
  );
};

export default App;
