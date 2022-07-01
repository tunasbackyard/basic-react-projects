import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Review = ({ name, job, image, text }) => {
  return (
    <article className="flex flex-col items-center">
      <div className="absolute -top-4 right-4 py-1 px-2 rounded-lg text-4xl bg-blue-400 text-slate-100">
        <FaQuoteRight />
      </div>
      <img
        className="w-48 h-48 object-cover rounded-full shadow-lg shadow-blue-700"
        src={image}
        alt="person-image"
      />
      <h3 className="mt-10 mb-1 capitalize font-bold text-xl">
        {name} - {job}
      </h3>
      <p className="flex max-w-4xl">{text}</p>
    </article>
  );
};

export default Review;
