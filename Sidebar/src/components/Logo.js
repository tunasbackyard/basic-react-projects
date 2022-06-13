import React from "react";

const Logo = ({ display, setDisplay }) => {
  return (
    <div className="logo container">
      {display && (
        <h3 className="logo__title">
          The<span>Company</span>
        </h3>
      )}
      <button
        className="toggle-btn"
        onClick={() => {
          setDisplay(!display);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
};

export default Logo;
