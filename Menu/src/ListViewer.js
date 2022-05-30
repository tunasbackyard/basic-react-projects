import React, { useState } from "react";
import Filter from "./Filter";
import List from "./List";
import data from "./data";

const ListViewer = () => {
  const categories = [];
  let filterBtnID = 0;
  const [filter, setFilter] = useState("all");

  function changeFilter(category) {
    setFilter(category);
  }

  return (
    <section className="wrapper">
      <div className="filters">
        <Filter text={"all"} changeFilter={changeFilter} />
        {data.map((item) => {
          if (!categories.includes(item.category)) {
            categories.push(item.category);
            return (
              <Filter
                key={filterBtnID++}
                text={item.category}
                changeFilter={changeFilter}
              />
            );
          }
        })}
      </div>
      <List data={data} filter={filter} />
    </section>
  );
};

export default ListViewer;
