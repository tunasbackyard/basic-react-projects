import React, { useEffect } from "react";

const Dialog = ({ text, setIsAdded }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
    return clearTimeout;
  }, []);

  return <div className="form__message">{text}</div>;
};

export default Dialog;
