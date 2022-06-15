import React from "react";

const Dialog = ({ text, color }) => {
  return (
    <dialog className="dialog" style={{ backgroundColor: color }} open>
      <h3 className="dialog__text">{text}</h3>
    </dialog>
  );
};

export default Dialog;
