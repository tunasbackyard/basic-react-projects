import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <article className="flex flex-col items-center w-fit my-12 py-8 px-12 shadow-lg">
      <img className="flex rounded" src={image} alt={name} />
      <div className="flex w-full justify-between items-center my-6">
        <h1>{name}</h1>
        <h4>${price}</h4>
      </div>
      <p className="text-justify">
        {isClicked ? info : info.substring(0, 200)}
        <button
          className="ml-1 text-blue-500 underline cursor-pointer"
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          {isClicked ? "Show Less" : "Read More"}
        </button>
      </p>
      <button
        className="w-fit mt-8 py-2 px-8 cursor-pointer text-white bg-pink-600 rounded-2xl hover:bg-pink-700"
        onClick={() => {
          removeTour(id);
        }}
      >
        Not interesting
      </button>
    </article>
  );
}

export default Tour;
