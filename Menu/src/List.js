import React from "react";
import Item from "./Item";

const List = ({ data, filter }) => {
  console.log(filter);
  return (
    <div className="list">
      {data.map((item) => {
        if (item.category == filter) {
          return <Item key={item.id} {...item} />;
        }
        if (filter == "all") {
          return <Item key={item.id} {...item} />;
        }
      })}
    </div>
  );
};

export default List;
