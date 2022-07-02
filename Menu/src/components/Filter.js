import React from "react";
import { useGlobalContext } from "../context";

const Filter = ({ filter }) => {
  const { changeFilter } = useGlobalContext();
  return (
    <button
      className="cursor-pointer my-1 mx-2 py-1 px-8 text-lg text-yellow-600 border-2 border-yellow-600 capitalize hover:bg-yellow-600 hover:text-gray-50 transition-all"
      onClick={() => {
        changeFilter(filter);
      }}
    >
      {filter}
    </button>
  );
};

export default Filter;
