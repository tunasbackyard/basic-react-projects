import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const Item = ({ title, info }) => {
  const [isQuestionOpened, setIsQuestionOpened] = useState(false);

  return (
    <div className="w-full py-2 px-5 bg-slate-600 cursor-pointer my-1 hover:text-slate-100">
      <div
        className="flex py-1 items-center justify-between"
        onClick={() => {
          setIsQuestionOpened(!isQuestionOpened);
        }}
      >
        <h4 className="">{title}</h4>
        {isQuestionOpened ? <BiMinus /> : <BiPlus />}
      </div>
      {isQuestionOpened && (
        <p className="my-1 border-l-2 px-4 py-1 bg-slate-700 rounded">{info}</p>
      )}
    </div>
  );
};

export default Item;
