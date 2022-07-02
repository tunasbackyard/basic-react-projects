import React from "react";
import { useGlobalContext } from "../context";
import Button from "./Button";
import Item from "./Item";

const List = () => {
  const { data, currentIx } = useGlobalContext();
  return (
    <section className="wrapper">
      <div className="tabs">
        {data.map((item, index) => (
          <Button key={index} text={item.company} order={item.order} />
        ))}
      </div>
      <Item {...data[data.length - currentIx - 1]} />
    </section>
  );
};

export default List;
