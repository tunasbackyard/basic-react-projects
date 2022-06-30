import React from "react";
import { GrFormNext } from "react-icons/gr";
import { TiDelete } from "react-icons/ti";
import { useGlobalContext } from "../context";

const Item = ({ id, title, price, img, amount }) => {
  const { removeItem, increase, decrease } = useGlobalContext();
  return (
    <li className="flex my-4 w-full">
      <img className="w-auto h-24" src={img} alt="phone-image" />
      <div className="flex flex-col justify-evenly text-left w-full">
        <div className="text-xl capitalize">
          <h3 className="text-gray-700">{title}</h3>
          <span className="text-gray-600 font-bold">${price}</span>
        </div>
        <button
          className="flex items-center w-fit text-white bg-red-400 px-5 py-1 rounded shadow text-sm"
          onClick={() => removeItem(id)}
        >
          <TiDelete className="mr-2" />
          Remove Item
        </button>
      </div>
      <div className="px-4 mx-10 my-auto text-xl">
        <GrFormNext
          className="-rotate-90 cursor-pointer"
          onClick={() => {
            increase(id);
          }}
        />
        <span>{amount}</span>
        <GrFormNext
          className="rotate-90 cursor-pointer"
          onClick={() => {
            decrease(id);
          }}
        />
      </div>
    </li>
  );
};

export default Item;
