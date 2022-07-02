import React from "react";

const Filter = ({ filter, changeFilter }) => {
  return (
    <button
      className="filters__btn"
      onClick={() => {
        changeFilter(filter);
      }}
    >
      {filter}
    </button>
  );
};

export default Filter;
