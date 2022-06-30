import React from "react";
import { useGlobalContext } from "../context";
import Item from "./Item";

const List = () => {
  const { data } = useGlobalContext();

  return (
    <ul className="wrapper">
      <h3>{data.length} birthdays today</h3>
      {data.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default List;
