import React from "react";

const Tabs = ({ clickHandler, data }) => {
  return (
    <div className="tabs">
      <button
        className="tab"
        onClick={() => {
          clickHandler(data[2]);
        }}
      >
        {data[2]?.company ?? "undefined"}
      </button>
      <button
        className="tab"
        onClick={() => {
          clickHandler(data[1]);
        }}
      >
        {data[1]?.company ?? "undefined"}
      </button>
      <button
        className="tab"
        onClick={() => {
          clickHandler(data[0]);
        }}
      >
        {data[0]?.company ?? "undefined"}
      </button>
    </div>
  );
};

export default Tabs;
