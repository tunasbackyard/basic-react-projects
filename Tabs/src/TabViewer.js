import React from "react";
import Item from "./Item";
import TabMenu from "./TabMenu";

const TabViewer = () => {
  return (
    <section className="wrapper">
      <TabMenu />
      <Item />
    </section>
  );
};

export default TabViewer;
