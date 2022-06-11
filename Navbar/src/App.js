import React, { useRef, useState } from "react";
import { navLinks, socialLinks } from "./data";

const App = () => {
  const [showMenu, setShowMenu] = useState(true);
  const navContainer = useRef();
  const linksContainer = useRef();

  function handleDisplay(isShown) {
    if (isShown) {
      linksContainer.current.classList.remove("container--active");
      navContainer.current.classList.remove("container--active");
      linksContainer.current.classList.add("container--hidden");
      navContainer.current.classList.add("container--hidden");
    } else {
      linksContainer.current.classList.add("container--active");
      navContainer.current.classList.add("container--active");
      linksContainer.current.classList.remove("container--hidden");
      navContainer.current.classList.remove("container--hidden");
    }
  }

  return (
    <header className="navbar">
      <div className="logo">
        <h3 className="logo__title">
          The<span>Company</span>
        </h3>
      </div>
      <nav className="nav" ref={navContainer}>
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
      <div className="links" ref={linksContainer}>
        <ul className="links__list">
          {socialLinks.map((link) => (
            <li className="links__list__item" key={link.id}>
              <a
                className="links__list__item__link"
                href={link.url}
                target="_blank"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="toggle-btn"
        onClick={() => {
          setShowMenu(!showMenu);
          handleDisplay(showMenu);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default App;
