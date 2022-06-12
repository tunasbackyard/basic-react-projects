import React, { useState } from "react";

const ToggleBtn = ({ setDisplayValue }) => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <button
      className="toggle-btn"
      onClick={() => {
        setShowMenu(!showMenu);
        setDisplayValue(showMenu);
      }}
    >
      <i className="fa-solid fa-bars"></i>
    </button>
  );
};

export default ToggleBtn;
