import React from "react";
import { useGlobalContext } from "../context";
import Item from "./Item";

const Slide = () => {
  const { data, isActiveSlide, isLastSlide, isEndOfTheSlide } =
    useGlobalContext();
  return (
    <div className="relative mx-auto w-[70vw] h-[300px] text-center">
      {data.map((item, itemIx) => {
        let position = "nextSlide";
        if (isActiveSlide(itemIx)) position = "activeSlide";

        if (isLastSlide(itemIx) || isEndOfTheSlide(itemIx))
          position = "lastSlide";
        return <Item key={itemIx} {...item} position={position} />;
      })}
    </div>
  );
};

export default Slide;
