import React, { useState } from "react";
import { mediaLinks, navLinks } from "./data";

import Logo from "./components/Logo";
import Media from "./components/Media";
import Navigation from "./components/Navigation";

const Sidebar = () => {
  const [display, setDisplay] = useState(true);

  return (
    <section className="sidebar">
      <Logo display={display} setDisplay={setDisplay} />
      <Navigation display={display} navLinks={navLinks} />
      <Media display={display} mediaLinks={mediaLinks} />
    </section>
  );
};

export default Sidebar;
