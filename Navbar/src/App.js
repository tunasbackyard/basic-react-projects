import React from "react";

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
          <li className="nav__list__item">Home</li>
          <li className="nav__list__item">About</li>
          <li className="nav__list__item">Projects</li>
          <li className="nav__list__item">Contact</li>
          <li className="nav__list__item">Profile</li>
        </ul>
      </nav>
      <div className="links container">
        <ul className="links__list">
          <li className="links__list__item">
            <i class="fa-brands fa-facebook-square"></i>
          </li>
          <li className="links__list__item">
            <i class="fa-brands fa-instagram-square"></i>
          </li>
          <li className="links__list__item">
            <i class="fa-brands fa-github-square"></i>
          </li>
          <li className="links__list__item">
            <i class="fa-brands fa-linkedin"></i>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default App;
