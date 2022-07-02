import React from "react";
import Item from "./Item";
import data from "../data/data";

const List = () => {
  return (
    <section className="flex flex-col w-3/4 mx-auto h-fit my-10 items-center shadow-lg">
      {data.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </section>
  );
};

export default List;
