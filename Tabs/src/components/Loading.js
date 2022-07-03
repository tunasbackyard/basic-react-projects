import React from "react";
import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen text-2xl bg-slate-800 text-slate-100">
      <ImSpinner2 className="mx-2 animate-spin" />
      Loading . .
    </div>
  );
};

export default Loading;
