import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Controller = ({ showPrev, showNext, showRandomReview }) => {
  return (
    <div className="controller">
      <div className="controller__prev-next">
        <button className="controller__btn" onClick={showPrev} title="prev">
          <FaAngleLeft />
        </button>
        <button className="controller__btn" onClick={showNext} title="next">
          <FaAngleRight />
        </button>
      </div>
      <button className="controller__random-btn" onClick={showRandomReview}>
        Surprise Me
      </button>
    </div>
  );
};

export default Controller;
