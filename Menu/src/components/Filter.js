import React from "react";
import { useGlobalContext } from "../context";

const Filter = ({ filter }) => {
  const { changeFilter } = useGlobalContext();
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
