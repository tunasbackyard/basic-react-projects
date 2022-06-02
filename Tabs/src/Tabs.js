import React from "react";

const Tabs = ({ clickHandler, data }) => {
  return (
    <div className="tabs">
      <span
        className="tab"
        onClick={() => {
          clickHandler(data[2]);
        }}
      >
        {data[2]?.company ?? "undefined"}
      </span>
      <span
        className="tab"
        onClick={() => {
          clickHandler(data[1]);
        }}
      >
        {data[1]?.company ?? "undefined"}
      </span>
      <span
        className="tab"
        onClick={() => {
          clickHandler(data[0]);
        }}
      >
        {data[0]?.company ?? "undefined"}
      </span>
    </div>
  );
};

export default Tabs;
