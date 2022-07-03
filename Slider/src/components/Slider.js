import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useGlobalContext } from "../context";
import Button from "./Button";
import Item from "./Item";

const Slider = () => {
  const { currentIx, data, isActiveSlide, isLastSlide, isEndOfTheSlide } =
    useGlobalContext();

  return (
    <div className="wrapper">
      <Button clickHandler={() => currentIx - 1} icon={<FiChevronLeft />} />
      <div className="slider">
        {data.map((item, itemIx) => {
          let position = "nextSlide";
          if (isActiveSlide(itemIx)) position = "activeSlide";

          if (isLastSlide(itemIx) || isEndOfTheSlide(itemIx))
            position = "lastSlide";
          return <Item key={itemIx} {...item} position={position} />;
        })}
      </div>
      <Button clickHandler={() => currentIx + 1} icon={<FiChevronRight />} />
    </div>
  );
};

export default Slider;
