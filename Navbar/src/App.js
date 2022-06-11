import React from "react";
import { navLinks, socialLinks } from "./data";

const App = () => {
  return (
    <header className="navbar">
      <div className="logo container">
        <h3 className="logo__title">
          The<span>Company</span>
        </h3>
      </div>
      <nav className="nav container">
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
      <div className="links container">
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
      <button className="toggle-btn">
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default App;
