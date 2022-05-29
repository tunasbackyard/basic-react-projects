import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Review = ({ id, name, job, image, text }) => {
  return (
    <article className="review">
      <div className="review__quote-icon-container">
        <FaQuoteRight />
      </div>
      <img className="review__img-container" src={image} alt="person-image" />
      <h3 className="review__author-name-job">
        {name} - {job}
      </h3>
      <p className="review__text">{text}</p>
    </article>
  );
};

export default Review;
