import React from "react";
import { useGlobalContext } from "../context";

const Viewer = () => {
  const { number } = useGlobalContext();
  return (
    <span className="flex my-10 justify-center items-center w-12 h-12 bg-slate-500 rounded-sm shadow-md">
      {number}
    </span>
  );
};

export default Viewer;
