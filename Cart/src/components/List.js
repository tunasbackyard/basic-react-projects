import React from "react";
import { useGlobalContext } from "../context";
import Item from "./Item";

const List = () => {
  const { data } = useGlobalContext();
  return (
    <ul className="flex flex-col justify-center items-start text-center mx-auto my-10 w-5/6 text-gray-700 shadow-md rounded">
      <h2 className="text-xl font-bold bg-slate-100 w-full py-4 capitalize">
        your cart
      </h2>
      {data.map((item) => (
        <Item key={item.id} {...item} />
      ))}
      <div className="w-full text-right px-3 py-2">
        <span className="w-full">Total: $0.00</span>
      </div>
    </ul>
  );
};

export default List;
