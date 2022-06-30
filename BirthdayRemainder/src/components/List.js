import React from "react";
import { useGlobalContext } from "../context";
import Item from "./Item";

const List = () => {
  const { data } = useGlobalContext();

  return (
    <ul className="flex flex-col justify-center items-start w-fit bg-slate-100 px-5 py-5 rounded shadow-lg">
      <h3 className="text-xl font-bold">{data.length} birthdays today</h3>
      {data.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default List;
