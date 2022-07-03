import React from "react";

const Item = ({ id, image, name, title, quote, position }) => {
  return (
    <article
      className={`flex flex-col absolute items-center mx-4 w-full text-center text-slate-800 opacity-0 ${position} transition ease-in-out duration-[800ms]`}
      key={id}
    >
      <img
        src={image}
        alt={name}
        className="shadow-pink mb-12 w-[150px] h-[150px] rounded-xl object-cover"
      />
      <h4 className="flex text-2xl capitalize">{name}</h4>
      <span className="capitalize mb-4">{title}</span>
      <p className="max-w-[850px]">{quote}</p>
    </article>
  );
};

export default Item;
