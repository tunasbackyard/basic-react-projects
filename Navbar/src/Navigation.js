import React, { useRef } from "react";

const Navigation = ({ navLinks, displayValue }) => {
  const navContainer = useRef(null);
  if (displayValue) navContainer.current?.classList.add("container--hidden");
  else navContainer.current?.classList.remove("container--hidden");

  return (
    <nav className="nav container" ref={navContainer}>
      <ul className="nav__list">
        {navLinks.map((link) => (
          <li className="nav__list__item" key={link.id}>
            <a className="nav__list__item__link" href={link.url}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
