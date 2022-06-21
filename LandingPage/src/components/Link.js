import React from "react";
import { useGlobalContext } from "../Context";

const Link = ({ index, text }) => {
  const { openSubmenu, setCurrentLinkIndex } = useGlobalContext();
  return (
    <li
      className="mx-10 text-xl cursor-pointer capitalize"
      onMouseOver={() => {
        setCurrentLinkIndex(index);
        openSubmenu();
      }}
    >
      {text}
    </li>
  );
};

export default Link;
