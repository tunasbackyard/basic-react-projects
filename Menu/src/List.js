import React from "react";
import Item from "./Item";

const List = ({ data }) => {
  return (
    <div className="list">
      {data.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
};

export default List;
