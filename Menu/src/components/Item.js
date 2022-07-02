import React from "react";

const Item = ({ title, price, img, desc }) => {
  return (
    <article className="flex items-start w-full my-2 px-4 py-4 shadow-md">
      <div className="w-full">
        <img
          className="border-2 border-yellow-500 object-cover rounded w-[300px] h-[200px]"
          src={img}
          alt="food-image"
        />
      </div>
      <aside className="mx-8">
        <div className="flex w-full justify-between capitalize my-8 pb-2 border-b-2 border-yellow-800">
          <h3>{title}</h3>
          <span className="text-2xl">${price}</span>
        </div>
        <p>{desc}</p>
      </aside>
    </article>
  );
};

export default Item;
