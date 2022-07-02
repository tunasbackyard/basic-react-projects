import React, { useState } from "react";
import Item from "./Item";
import Tabs from "./Tabs";

const Viewer = ({ data }) => {
  const [current, setCurrent] = useState(data[2]);

  return (
    <section className="wrapper">
      <Tabs clickHandler={setCurrent} data={data} />
      <Item current={current} />
    </section>
  );
};

export default Viewer;
