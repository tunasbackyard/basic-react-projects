import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";

const Alert = ({ text }) => {
  const { hideAlert } = useGlobalContext();
  useEffect(() => {
    setTimeout(() => {
      hideAlert();
      return clearTimeout;
    }, 1000);
  }, []);

  return (
    <div className="fixed bottom-0 right-0 mx-5 my-10 px-10 py-2 bg-red-500 rounded shadow-md  text-slate-800 font-semibold">
      {text}
    </div>
  );
};

export default Alert;
