import React, { useState } from "react";
import Filter from "./Filter";
import List from "./List";
import { useGlobalContext } from "../context";

const Wrapper = () => {
  const { categories } = useGlobalContext();

  return (
    <section className="w-90 my-8 px-8">
      <div className="my-4 mx-auto w-fit">
        {categories.map((category, index) => (
          <Filter key={index} filter={category} />
        ))}
      </div>
      <List />
    </section>
  );
};

export default Wrapper;
