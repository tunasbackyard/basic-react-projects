import React from "react";
import Item from "./Item";
import data from "./data";

const List = () => {
  return (
    <div className="list">
      {data.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
};

export default List;
