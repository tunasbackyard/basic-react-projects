import React, { useState } from "react";

const Item = ({ title, info }) => {
  const [isQuestionOpened, setIsQuestionOpened] = useState(false);

  return (
    <div className="question__container">
      <div
        className="question__title"
        onClick={() => {
          setIsQuestionOpened(!isQuestionOpened);
        }}
      >
        <h4 className="question__text">{title}</h4>
        {isQuestionOpened ? (
          <i className="fa-solid fa-angle-up"></i>
        ) : (
          <i className="fa-solid fa-angle-down"></i>
        )}
      </div>
      {isQuestionOpened && <p className="question__answer">{info}</p>}
    </div>
  );
};

export default Item;
