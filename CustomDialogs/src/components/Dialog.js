import React, { useEffect } from "react";

const Dialog = ({ text, color, displayHandler }) => {
  const [isVisible, setIsVisible] = displayHandler;
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 1000);

    return clearTimeout();
  }, [isVisible]);

  return (
    <dialog className="dialog" style={{ backgroundColor: color }} open>
      <h3 className="dialog__text">{text}</h3>
    </dialog>
  );
};

export default Dialog;
