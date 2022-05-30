import React from "react";

const Filter = ({ text, changeFilter }) => {
  return (
    <button
      className="filters__btn"
      onClick={() => {
        changeFilter(text);
      }}
    >
      {text}
    </button>
  );
};

export default Filter;
