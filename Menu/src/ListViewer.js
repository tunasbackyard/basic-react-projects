import React from "react";
import Filter from "./Filter";
import List from "./List";
import data from "./data";

const ListViewer = () => {
  return (
    <section className="wrapper">
      <div className="filters">
        <Filter />
      </div>
      <List data={data} />
    </section>
  );
};

export default ListViewer;
