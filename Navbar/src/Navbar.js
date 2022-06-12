import React, { useState } from "react";
import { navLinks, socialLinks } from "./data";
import Logo from "./Logo";
import Media from "./Media";
import Navigation from "./Navigation";
import ToggleBtn from "./ToggleBtn";

const Navbar = () => {
  const [displayValue, setDisplayValue] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 750) setDisplayValue(false);
  });

  return (
    <section className="navbar">
      <Logo />
      <Navigation navLinks={navLinks} displayValue={displayValue} />
      <Media socialLinks={socialLinks} displayValue={displayValue} />
      <ToggleBtn setDisplayValue={setDisplayValue} />
    </section>
  );
};

export default Navbar;
