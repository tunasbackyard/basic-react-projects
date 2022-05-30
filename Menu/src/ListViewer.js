import React from "react";
import Filter from "./Filter";
import List from "./List";

const ListViewer = () => {
  return (
    <section className="wrapper">
      <div className="filters">
        <Filter />
      </div>
      <List />
    </section>
  );
};

export default ListViewer;
