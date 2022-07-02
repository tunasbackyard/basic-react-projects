import React from "react";
import { useGlobalContext } from "../context";
import Item from "./Item";

const List = () => {
  const { data, currentFilter } = useGlobalContext();
  return (
    <div className="grid grid-cols-2 gap-8">
      {data.map((item) => {
        if (item.category == currentFilter || "all" == currentFilter)
          return <Item key={item.id} {...item} />;
      })}
    </div>
  );
};

export default List;
