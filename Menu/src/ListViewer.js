import React, { useState } from "react";
import Filter from "./Filter";
import List from "./List";
import data from "./data";

const ListViewer = () => {
  const categories = ["all", ...new Set(data.map((item) => item.category))];
  const [filter, setFilter] = useState("all");

  function changeFilter(category) {
    setFilter(category);
  }

  return (
    <section className="wrapper">
      <div className="filters">
        {categories.map((category, index) => (
          <Filter key={index} filter={category} changeFilter={changeFilter} />
        ))}
      </div>
      <List data={data} filter={filter} />
    </section>
  );
};

export default ListViewer;
