import React from "react";
import Item from "./Item";
import Button from "./Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useGlobalContext } from "../context";

const List = () => {
  const { data, currentIx, showPrev, showNext, showRandom } =
    useGlobalContext();
  return (
    <ul>
      <Item {...data[currentIx]} />
      <div className="flex w-fit mx-auto my-5">
        <Button icon={<FaAngleLeft />} handler={showPrev} />
        <Button icon={"Surprise Me"} handler={showRandom} />
        <Button icon={<FaAngleRight />} handler={showNext} />
      </div>
    </ul>
  );
};

export default List;
