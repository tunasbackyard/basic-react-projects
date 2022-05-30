import React, { useState } from "react";

const Container = ({ id, title, info }) => {
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
        <i
          className={
            isQuestionOpened
              ? "fa-solid fa-angle-down question__icon--rotate"
              : "fa-solid fa-angle-down"
          }
        ></i>
      </div>
      <p className="question__answer">{isQuestionOpened && info}</p>
    </div>
  );
};

export default Container;
