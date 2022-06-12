import React from "react";
import Logo from "./components/Logo";
import Media from "./components/Media";
import Navigation from "./components/Navigation";

import "./index.css";
import { mediaLinks, navLinks } from "./data";

const App = () => {
  return (
    <section className="sidebar">
      <Logo />
      <Navigation navLinks={navLinks} />
      <Media mediaLinks={mediaLinks} />
    </section>
  );
};

export default App;
