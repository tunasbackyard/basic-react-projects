import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useGlobalContext } from "../context";
import Button from "./Button";
import Slide from "./Slide";

const Slider = () => {
  const { currentIx } = useGlobalContext();

  return (
    <div className="flex flex-row items-baseline mt-20 overflow-hidden">
      <Button clickHandler={() => currentIx - 1} icon={<FiChevronLeft />} />
      <Slide />
      <Button clickHandler={() => currentIx + 1} icon={<FiChevronRight />} />
    </div>
  );
};

export default Slider;
