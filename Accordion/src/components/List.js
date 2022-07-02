import React from "react";
import Item from "./Item";
import data from "../data/data";

const List = () => {
  return (
    <section className="wrapper">
      {data.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </section>
  );
};

export default List;
