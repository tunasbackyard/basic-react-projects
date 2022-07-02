import React, { useState } from "react";
import Filter from "./Filter";
import List from "./List";
import { useGlobalContext } from "../context";

const Wrapper = () => {
  const { categories } = useGlobalContext();

  return (
    <section className="wrapper">
      <div className="filters">
        {categories.map((category, index) => (
          <Filter key={index} filter={category} />
        ))}
      </div>
      <List />
    </section>
  );
};

export default Wrapper;
