import React from "react";
import Filter from "./Filter";
import List from "./List";
import data from "./data";

const ListViewer = () => {
  const categories = [];
  return (
    <section className="wrapper">
      <div className="filters">
        <Filter text={"All"} />
        {data.map((item) => {
          if (!categories.includes(item.category)) {
            categories.push(item.category);
            return <Filter text={item.category} />;
          }
        })}
      </div>
      <List data={data} />
    </section>
  );
};

export default ListViewer;
