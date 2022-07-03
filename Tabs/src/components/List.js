import React from "react";
import { useGlobalContext } from "../context";
import Button from "./Button";
import Item from "./Item";

const List = () => {
  const { data, currentIx } = useGlobalContext();
  return (
    <section className="flex w-fit mx-auto bg-slate-700 px-4 py-4 rounded-md shadow-lg">
      <div className="flex flex-col h-full justify-evenly items-center border-r-2 pr-5 border-slate-400">
        {data.map((item, index) => (
          <Button key={index} text={item.company} order={item.order} />
        ))}
      </div>
      <Item {...data[data.length - currentIx - 1]} />
    </section>
  );
};

export default List;
