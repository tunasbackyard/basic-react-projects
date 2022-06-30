import React from "react";
import { useGlobalContext } from "../context";

const Viewer = () => {
  const { number } = useGlobalContext();
  return <span className="number">{number}</span>;
};

export default Viewer;
