import React from "react";

const Book = ({ imageLink, title, author }) => {
  return (
    <article className="mx-4 px-5 py-5 shadow-md rounded text-gray-500 bg-slate-200">
      <img className="w-52" src={imageLink} alt="book image" />
      <div className="">
        <summary className="my-4">
          <h2 className="w-44 font-bold">{title}</h2>
          <p className="font-semibold">{author}</p>
        </summary>
        <button className="bottom-0 w-full text-center py-2 rounded-sm shadow bg-gray-800 text-lime-50">
          Order Now
        </button>
      </div>
    </article>
  );
};

export default Book;
