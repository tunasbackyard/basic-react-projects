import React from "react";

const Navigation = ({ navLinks }) => {
  return (
    <nav className="navigation container">
      <ul className="navigation__list">
        {navLinks.map((link) => (
          <li className="navigation__list__item" key={link.id}>
            <a className="navigation__list__item__link" href="">
              <i className={link.icon}></i>
              <p>{link.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
