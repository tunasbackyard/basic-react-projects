import React, { useEffect } from "react";

const Dialog = ({ text, color, dispatch }) => {
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "HIDE_DIALOG" });
    }, 1000);

    return clearTimeout();
  }, []);

  return (
    <dialog className="dialog" style={{ backgroundColor: color }} open>
      <h3 className="dialog__text">{text}</h3>
    </dialog>
  );
};

export default Dialog;
